# Athena - Moderator Commands

![](https://i.imgur.com/rUp1rFL.png)

Adds the much needed in-game commands for moderators and administrators.

- /apm - Admin Private Message (Send Directly to another Player)
- /kick ID Reason - Kick a Player
- /ban ID Reason - Ban a Player
- /unban - Unban a Player
- /info ID - Get Player Account Info
- /goto ID - Teleport to a Player
- /gethere ID - Teleport a Player Here
- /freeze ID - Freeze a Player
- /unfreeze ID - Unfreeze a Player
- /setdimension ID Dimension - Sets dimension of a player
- /setinterior ID Interior - Sets interior of a player
- /refillVehicle - Refills fuel of an vehicle by administrative power
- /repairVehicle - Repairs an vehicle by administrative power

# Installation

### Download

[Download the Archive](https://github.com/Stuyk/athena-moderator-commands/archive/refs/heads/main.zip)

[Source Code](https://github.com/Stuyk/athena-moderator-commands)

### Move Folder

Extract the top level folder `athena-moderator-commands-main` into `src/core/server-plugins`.

Your final path should be `src/core/server-plugins/athena-moderator-commands-main`.

See _usage_ to see how to import and use this plugin.

### Verify Installation

Navigate to `src/core/plugins/athena-moderator-commands-main/index` and open the file.

Double check that the top-level imports are not underlined in **red**. If they are **red** then you installed this plugin wrong.

### Add to Imports

After checking the placement of the files.

Modify `src/core/plugins/imports.ts` and append the following in your `filePaths` variable inside `imports.ts`.

What to Append:

```typescript
"./athena-moderator-commands-main/index";
```

Example:

```typescript
const filePaths = [
  // GAMEMODE IMPORTS -- Remove what you don't want.
  "./heistExample/index",
  // YOUR IMPORTS -- BELOW HERE
  "./athena-moderator-commands-main/index",
];
```

# Usage

### Admin Private Message

```typescript
/apm [in-game id] [?...message]
```

### Kick

```typescript
/kick [in-game id] [?...reason]
```

### Ban

```typescript
/ban [in-game id] [?...reason]'
```

### Unban

```typescript
/unban [discord id]
```

### Info

```typescript
/info [in-game id]
```

### Teleport to Player

```typescript
/goto [in-game id]
```

### Teleport Player to You

```typescript
/gethere [in-game id]
```

### Freeze Target

Also kicks the player out of their vehicle if they are in one.

```typescript
/freeze [in-game id]
```

### Unfreeze Target

```typescript
/unfreeze [in-game id]
```

### Setdimension

```typescript
/setdimension [in-game id] [dimension]
```

### Setinterior

```typescript
/setinterior [in-game id] [interior]
```

### refillVehicle

```typescript
/refillVehicle - Only works in vehicles.
```

### repairVehicle

```typescript
/repairVehicle - Only works in vehicles.
```

# Uninstalling

Delete the folder in `src/core/server-plugins/athena-moderator-commands-main`.
