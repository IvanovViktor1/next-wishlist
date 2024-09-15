"use client";

import React, { useCallback, useEffect, useState } from "react";
import { auth } from "@/lib/firebase/firebase";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { User as UserIcon } from "lucide-react";
import { logOut, signInWithGoogle } from "@/services/authService";

interface Props {
  className?: string;
}

export const Auth: React.FC<Props> = ({ className }) => {
  const [userInfo, setUserInfo] = useState<User | null>();

  const handleGoogleLogin = useCallback(async () => {
    const user = await signInWithGoogle();
    if (user) {
      setUserInfo(user);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    await logOut();
    setUserInfo(null);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={cn(" ", className)}>
      <Button
        variant={"outline"}
        className="flex items-center gap-1"
        onClick={userInfo ? handleLogout : handleGoogleLogin}
      >
        {userInfo ? "Выйти" : "Войти"}
        <UserIcon size={16} />
      </Button>
    </div>
  );
};
