# Limitations

## What a Workspace Does Not Save

A Workspace never writes to the following, and switching Workspaces leaves them as they are.

- **Scene and asset data** — GameObjects, Transforms, active states, Prefabs, materials, and assets are never written to. Nothing is added to your Scene.
- **Per-object Scene Visibility** — Objects you hid or isolated with the eye icon in the Hierarchy are not captured. Only the Scene Visibility master toggle is.
- **Which Scene is open** — Switching a Workspace never opens, closes, or saves a Scene.
- **Locked (non-pickable) layers** — Layer visibility is saved; layer locking is not.
- **Editor window layout** — Docking, overlay positions, and window arrangement are left to Unity's own layouts.
- **Project-wide settings** — Project Settings, Quality and Graphics settings, Lighting settings, and the Game view are out of scope.

## Undo

Switching Workspaces cannot be undone with <kbd>Ctrl</kbd> + <kbd>Z</kbd>. To go back, select the Workspace you were using, or choose **No Workspace** to return to the setup you had before you first applied a Workspace.

## Camera Position

The camera pivot is saved as a world-space position, so it is meaningful in the Scene where you saved it. Applying the Workspace in another Scene or in Prefab Mode moves the camera to the same coordinates.

## Multiple Scene Views

A Workspace belongs to the Editor rather than to one Scene View.

- **Per-view settings**, such as the viewpoint, draw mode, and lighting, apply only to the Scene View you used last.
- **Editor-wide settings**, such as tools, snapping, and the Gizmos window, change in every Scene View.
- **The selected Workspace is shared**, so the overlay in the other Scene Views shows a Workspace their view does not match.
- **Selecting the Workspace that is already selected does nothing**, even from another Scene View. To apply it there, switch to a different Workspace first.

## Isolate Auto-Switch

- **If no rule matches**, the Workspace does not change, and nothing is restored when you exit Isolation view.
- **If you isolate several objects at once**, the objects are checked one at a time, and the first object that matches any rule decides the Workspace.
- **If you switch Workspaces by hand while in Isolation view**, exiting Isolation view still returns you to the view you had before entering it.
- **If a rule's target Workspace has been deleted**, that rule does nothing.

## Prefab Mode

- **Auto-switch works in Prefab Mode too.** Isolating an object there applies the matching Workspace, just like in a Scene.
- **Opening Prefab Mode while in Isolation view ends Isolation view**, so your previous view is restored.
