import React, { useContext, useEffect, useState } from "react";

import { LangContext } from '../../../context/lang';
import { AlbumData, AlbumGateData, ImageSizeType, UserData, useUser } from "../../../context/UserContext";
import {
  GateWrapper,
  AppIconWrapper,
  BottomBar,
  Inner,
  AlbumInfo,
  ButtonWrapper,
  OverlayGradientBottom,
  StyledImage,
  OverlayGradientTop,
  NameModalInner,
  InfoAndLangChooser,
} from "./Albumgate.style";
import { AppIcon, LogoSizeType, Button, ButtonSize, ButtonType, InputType, Input, LanguageChooser } from "../../generics";
import { useRouter } from "next/router";
import { checkIfUserExist, ILoginUserResponse, saveUserAndGetGUID, saveUserToAlbum } from "../../../api/user";
import { LoginBlock } from "../LoginBlock/LoginBlock";
import { Modal } from "../../generics/Modal/Modal";
import { getCurrentImageURLWEBP } from "../../../helpers/imageHelper";

export interface IAlbumgateProps {
  album: AlbumGateData;
}

export const Albumgate: React.FC<IAlbumgateProps> = ({ album }) => {
  const router = useRouter();
  const {onUserData, loggedIn, user, checkIfMemberOfAlbum, localStorageLoaded, checkIfUserIsGuest} = useUser();
  const [nameInputValue, setNameInputValue] = useState("");
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [setLoggedInWithFacebook] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [memberOfAlbum, setMemberOfAlbum] = useState(false);
  const { state: { language}, dispatch: { setLanguage, translate } } = useContext(LangContext);
  
  const checkIfMember = async () => {
    const member:boolean = await checkIfMemberOfAlbum(album.id);
    if(member){
      router.push(`/albums/${album.id}`);
    }
    else{
      setMemberOfAlbum(member);
    }
  };


  useEffect(() => {
    checkIfMember();
  }, []);

  const goToAlbum = async () => {
    setIsLoading(false);
    router.push(`/albums/${album.id}`);
 };

  const addUserAndRedirect = async (userId: string, albumId:string) => {
    const userAdded = await saveUserToAlbum(userId, albumId);
  
    if(userAdded){
      goToAlbum();
    }
    else{
      console.error("User could not be added to album");
    }
  };

  const TryToAddUserToAlbum = (userData:UserData) => {
    setIsLoading(true);
    addUserAndRedirect(userData.id, album.id);
  };

  const addUserToSystem = async (userData:UserData) => {
    const response:ILoginUserResponse|boolean|null = await saveUserAndGetGUID(userData);
    if(response){
        userData.id = response.id;
        userData.name = response.name;
        userData.language = language ?? "EN";
        onUserData(userData);
        TryToAddUserToAlbum(userData);
      }
      else{
        router.push(`/albums/albumgate`); 
      }   
  };

  const connectToAlbum = async () => {

    if(nameInputValue.length > 2){
      setShowConnectModal(false);
      const userData:UserData = {
        id: null,
        facebookId: null,
        name: nameInputValue,
        email: '',
        profilePicture: '',
        language: '',
        tokens: {
          facebookToken: '',
        }
      };
      addUserToSystem(userData);
    }
    else{
      console.error("Couldn't connect to album");
    }
  };

  const HandleNameInput = (s:string) => {
    setNameInputValue(s);
  }

  const showNameModal = () => {
    setShowGuestModal(true);
  };

  const hideNameModal = () => {
    setShowGuestModal(false);
  };

  const hideConnectModal = () => {
    setShowConnectModal(false);
    setShowGuestModal(false);
  };

  const doesUserExist = async () => {
    const userExist:ILoginUserResponse|boolean|null = await checkIfUserExist(user); 
    const userObject:UserData|undefined = userExist?.[0];

    if(userObject && userObject !== undefined && userObject.id){
      TryToAddUserToAlbum(user);
    }
    else if((userObject && userObject.id === "") || userObject === undefined){
      const userData:UserData = {
        id: null,
        facebookId: user.facebookId,
        name: user.name,
        email: '',
        profilePicture: user.profilePicture,
        language: '',
        tokens: {
          facebookToken: '',
        }
      };
      addUserToSystem(userData);
    }
  }; 

  const showModal = () => {
    if(!loggedIn){
      setShowConnectModal(true);
    }
    else{
      doesUserExist();
    }
  };

  const albumImage = ():string =>{
    if(album.coverImage){
      return getCurrentImageURLWEBP(album.coverImage, ImageSizeType.xlarge)
    }
    else{
      return '/assets/svg/noImage.svg';
    }
  };

  const AddUserToAlbumAndNavigateToAlbum = () => {
    user && user.facebookId !== "0" && setLoggedInWithFacebook(true);
  };


const nameModal = showGuestModal && (
  <NameModalInner>
    <h4>{translate('GuestModal.WhatsYourName')}</h4>
    <Input name="name" type={InputType.Text} autoFocusOnLoad={true} value="" placeholder={translate('GuestModal.placeholder')} handleChange={HandleNameInput} />
    <Button
      label={translate("Actions.continue")}
      type={ButtonType.Primary}
      onClickFunc={connectToAlbum}
      fullWidth
    ></Button>
    <Button
      label={translate("Actions.back")}
      type={ButtonType.Link}
      onClickFunc={hideNameModal}
      fullWidth
    ></Button>
  </NameModalInner>
);

const connectModal = localStorageLoaded && <Modal show={showConnectModal} onCloseFunc={hideConnectModal} title={showGuestModal ? translate('GuestModal.title') : translate('Navigation.nav4')} autoSize={true}>
  {showGuestModal ? nameModal : <LoginBlock facebook={true} tabIndex={0} useGuestSignIn={true} useHeader={false} guestSignInFunc={showNameModal} whenLoggedInFunc={AddUserToAlbumAndNavigateToAlbum} />}
  </Modal>;

  const Buttons = memberOfAlbum ? (
    <>
      <Button
        label={translate('Albumgate.continueToAlbum')}
        type={ButtonType.Primary}
        size={ButtonSize.Large}
        fullWidth={true}
        isLoading={isLoading}
        onClickFunc={showModal}
      ></Button>
    </>
  ) : (
    <>
      <Button
        label={translate('Albumgate.connectBtnLabel')}
        type={ButtonType.Primary}
        size={ButtonSize.Large}
        fullWidth={true}
        isLoading={isLoading}
        onClickFunc={showModal}
      ></Button>
    </>
  );

  const AlbumGate = album && (
    <GateWrapper>
      { connectModal }
      <AppIconWrapper>
        <AppIcon light={false} size={LogoSizeType.Medium} />
      </AppIconWrapper>
      <BottomBar>
        <Inner>
        <InfoAndLangChooser>
          <AlbumInfo>
            <h4>{album.title}</h4>
            <h5>{album.subTitle}</h5>
          </AlbumInfo>
          <LanguageChooser openAbove />
        </InfoAndLangChooser>
        <ButtonWrapper>{Buttons}</ButtonWrapper>
        </Inner>
      </BottomBar>
      <OverlayGradientTop />
      <OverlayGradientBottom />
      <StyledImage src={albumImage()} alt={album.title} />
    </GateWrapper>
  );

  return AlbumGate;
};
