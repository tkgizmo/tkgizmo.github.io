# Overlay

The **Scene View Workspace** overlay is where you save and switch Workspaces. After importing, it appears on the Scene View, and the [built-in presets](./presets) are already set up.

## How to Open

If the overlay is not shown, open the **Overlay Menu** from the Scene View's three-dot menu and check **Scene View Workspace**.

**Unity 6000.0**

![Overlay Menu in Unity 6000.0 with Scene View Workspace checked](/scene-view-workspace/SceneViewOverlay4.png)

**Unity 6000.3**

![Overlay Menu in Unity 6000.3 with Scene View Workspace checked](/scene-view-workspace/SceneViewOverlay5.png)

## Basic Usage

The overlay has three controls.

| Control | Role |
| --- | --- |
| Workspace dropdown | Shows and switches the active Workspace. An `*` is appended when there are unsaved changes. |
| Save dropdown | **Save New** saves the current state as a new Workspace. **Overwrite** updates the active Workspace. |
| Settings button (⚙) | Opens the Workspace Settings window. |

## Saving a Workspace

1. Set up the Scene View the way you want it (camera, draw mode, tools, and so on).
2. Choose **Save → Save New** in the overlay and give the Workspace a name.
3. To update the selected Workspace with the current state, choose **Save → Overwrite**.

![Save dropdown with Save New and Overwrite](/scene-view-workspace/SceneViewOverlay2.png)

## Switching Workspaces

Saved Workspaces are listed in the Workspace dropdown. Selecting one applies the Scene View state it saved to the current view.

Selecting **No Workspace** deselects the Workspace and returns the Scene View to the state it was in before you first selected a Workspace.

![Workspace dropdown listing the saved Workspaces](/scene-view-workspace/SceneViewOverlay1.png)
