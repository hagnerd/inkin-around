import React from "react";
import { render, Box, Text } from "ink";
import TextInput from "ink-text-input";

function UserInput({ handleSubmit }) {
  let [input, setInput] = React.useState("");

  const handleChange = value => {
    setInput(value);
  };

  return (
    <Box>
      <Text>Enter your name: </Text>
      <TextInput
        value={input}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}

function App() {
  let [name, setName] = React.useState("");

  return (
    <Box flexDirection="column">
      <UserInput handleSubmit={setName} />
      {name !== "" ? <Text>Hi {name}👋</Text> : null}
    </Box>
  );
}

render(<App />);
