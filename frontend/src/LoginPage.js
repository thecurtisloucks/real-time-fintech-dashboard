import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  box-shadow: 0 0 10px #ccc;
  border-radius: 8px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 0.8rem;
  font-size: 1rem;
`;

const Button = styled.button`
  margin: 5px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => createUserWithEmailAndPassword(auth, email, password);
  const signIn = () => signInWithEmailAndPassword(auth, email, password);

  return (
    <Container>
      <h1>Sign In / Sign Up</h1>
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={signIn}>Sign In</Button>
      <Button onClick={signUp}>Sign Up</Button>
    </Container>
  );
}
