import ModalSkeletonInstint, {
  ModalSkeletonInstintProps,
} from "../modal/ModalSkeletonInstint";
import { BrowserWallet } from "@meshsdk/core";
import { Cancel } from "@mui/icons-material";
import CardInstint from "../card/Card";
import { Logout } from "@mui/icons-material";
import ButtonWalletModalInstint, {
  ButtonWalletModalInstintProps,
} from "./ButtonWalletModalInstint";
import {
  MainInstintProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import ButtonIconInstint, {
  ButtonIconInstintProps,
} from "../button/ButtonIconInstint";
import { dark } from "@mui/material/styles/createPalette";
import { useMemo } from "react";
export interface ModalWalletListInstintProps extends MainInstintProps {
  modalSkeleton: ModalSkeletonInstintProps;
  cancelContainerStyles: StylesInstintProps;
  walletContainerStyles: StylesInstintProps;
  cancelStyles: StylesInstintProps;
  buttonWallet: ButtonWalletModalInstintProps;
  buttonIcon: ButtonIconInstintProps;
  onClick: () => void;
}

export default function ModalWalletListInstint({
  theme,
  darkInstint,
  modalSkeleton,
  cancelContainerStyles,
  walletContainerStyles,
  cancelStyles,
  buttonIcon,
  buttonWallet,
  onClick,
}: ModalWalletListInstintProps) {
  const installedWallets = BrowserWallet.getInstalledWallets();
  const modalColor = useMemo(() => {
    const colorObject = {
      cancelContainer: determineClass(
        theme,
        cancelContainerStyles.brandStyles,
        cancelContainerStyles.darkStyles,
        cancelContainerStyles.lightStyles,
        darkInstint
      ),
      cancel: determineClass(
        theme,
        cancelStyles.brandStyles,
        cancelStyles.darkStyles,
        cancelStyles.lightStyles,
        darkInstint
      ),
      walletContainer: determineClass(
        theme,
        walletContainerStyles.brandStyles,
        walletContainerStyles.darkStyles,
        walletContainerStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [darkInstint, theme]);
  return (
    <ModalSkeletonInstint
      theme={theme}
      darkInstint={darkInstint}
      modalStyles={modalSkeleton.modalStyles}
      containerStyles={modalSkeleton.containerStyles}
    >
      <CardInstint className={modalColor.cancelContainer}>
        <Cancel className={modalColor.cancel} />
      </CardInstint>
      <CardInstint className={modalColor.walletContainer}>
        {installedWallets.map((value: any) => (
          <ButtonWalletModalInstint
            buttonStyles={buttonWallet.buttonStyles}
            onClick={onClick}
            theme={theme}
            darkInstint={darkInstint}
            wallet={value.wallet}
            image={value.image}
            buttonContainerStyles={buttonWallet.buttonContainerStyles}
            imageStyles={buttonWallet.imageStyles}
            headerStyles={buttonWallet.headerStyles}
          />
        ))}
        <ButtonIconInstint
          content={buttonIcon.content}
          containerStyles={buttonIcon.containerStyles}
          icon={buttonIcon.icon}
          buttonStyles={buttonIcon.buttonStyles}
          spanStyles={buttonIcon.spanStyles}
          theme={theme}
          darkInstint={darkInstint}
          onClick={buttonIcon.onClick}
        />
      </CardInstint>
    </ModalSkeletonInstint>
  );
}
