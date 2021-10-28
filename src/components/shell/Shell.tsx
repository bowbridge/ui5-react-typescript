import React from "react"
import {
  ShellBar,
  ShellBarPropTypes,
} from "@ui5/webcomponents-react/dist/ShellBar"
import {
  Avatar,
  AvatarShape,
  Icon,
  ShellBarItem,
} from "@ui5/webcomponents-react"
import { useHistory } from "react-router-dom"
import { ROUTES } from "../../routes/Routes"

import { ThemingParameters } from "@ui5/webcomponents-react-base/dist/ThemingParameters"
import { getIcon } from "../../util/sapicons"
import { useTeleport } from "@bowbridge/ui5-react-toolkit"
import { UserConfigActionSheet } from "../Popover/UserConfigActionSheet"
import { LayoutConfigPopover } from "../Popover/LayoutConfigPopover"

interface ShellProps extends ShellBarPropTypes {}

const Shell = ({ title, ...props }: ShellProps) => {
  const history = useHistory()

  const UserConfigActionSheetHandler = useTeleport()
  const LayoutConfigPopoverHandler = useTeleport()

  return (
    <>
      <ShellBar
        primaryTitle={title}
        style={{ position: "fixed", width: "100%", zIndex: 100 }}
        logo={
          <Icon
            name={getIcon("checklist")}
            style={{
              height: "1.75rem",
              width: "1.75rem",
              color: ThemingParameters.sapBrandColor,
            }}
          />
        }
        onLogoClick={() => history.push(ROUTES.HOME)}
        profile={
          <Avatar icon={getIcon("customer")} shape={AvatarShape.Circle} />
        }
        onProfileClick={(e) => {
          const targetRef = e.detail.targetRef as HTMLElement
          UserConfigActionSheetHandler.openPopover(targetRef)
        }}
        {...props}
      >
        <ShellBarItem
          icon={getIcon("customize")}
          onItemClick={(e) => {
            const targetRef = e.detail.targetRef as HTMLElement
            LayoutConfigPopoverHandler.openPopover(targetRef)
          }}
        />
      </ShellBar>
      <div style={{ paddingTop: "44px" }} />
      {UserConfigActionSheetHandler.isOpen && (
        <UserConfigActionSheetHandler.Teleport>
          <UserConfigActionSheet
            popoverRef={UserConfigActionSheetHandler.popoverRef}
            onClose={UserConfigActionSheetHandler.close}
          />
        </UserConfigActionSheetHandler.Teleport>
      )}
      {LayoutConfigPopoverHandler.isOpen && (
        <LayoutConfigPopoverHandler.Teleport>
          <LayoutConfigPopover
            popoverRef={LayoutConfigPopoverHandler.popoverRef}
            onClose={LayoutConfigPopoverHandler.close}
          />
        </LayoutConfigPopoverHandler.Teleport>
      )}
    </>
  )
}

export default Shell
