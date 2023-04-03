import React from 'react';
import { ThemedButton } from "ThemedButton";

export default function Toolbar({props}) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}