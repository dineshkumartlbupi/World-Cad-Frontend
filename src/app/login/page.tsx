"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Set token in localStorage for client-side API calls
        localStorage.setItem("adminToken", data.token);

        // Set token in Cookie for middleware protection
        document.cookie = `adminToken=${data.token}; path=/; max-age=86400; samesite=lax`;

        router.push("/admin");
        router.refresh(); // Ensure middleware picks up the new cookie
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("Failed to connect to the server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{
        width: "100%",
        maxWidth: "384px",
        paddingLeft: "32px",
        paddingRight: "32px"
      }}>
        <div style={{
          textAlign: "center",
          marginBottom: "48px"
        }}>
          <h1 style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "8px"
          }}>Login</h1>
          <div style={{
            width: "64px",
            height: "4px",
            backgroundColor: "#312e81",
            marginLeft: "auto",
            marginRight: "auto"
          }}></div>
        </div>

        <form onSubmit={handleLogin} style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}>
          <div style={{
            position: "relative",
            border: "2px solid #e5e7eb",
            borderRadius: "8px",
            transition: "border-color 0.2s ease-in-out",
            padding: "8px"
          }}>
            <User style={{
              width: "24px",
              height: "24px",
              position: "absolute",
              left: "12px",
              top: "12px"
            }} />
            <input
              type="email"
              placeholder="Admin mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 8px 8px 44px",  // ← important (left padding)
                border: "none",
                outline: "none",
                fontSize: "16px",
                background: "transparent"
              }}
            />
          </div>

          <div style={{
            position: "relative",
            border: "2px solid #e5e7eb",
            borderRadius: "8px",
            transition: "border-color 0.2s ease-in-out",
            padding: "8px"
          }}>
            <Lock style={{
              width: "24px",
              height: "24px",
              position: "absolute",
              left: "12px",
              top: "12px"
            }} />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 8px 8px 44px",  // ← same fix
                border: "none",
                outline: "none",
                fontSize: "16px",
                background: "transparent"
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              backgroundColor: "#312e81",
              color: "white",
              fontWeight: 700,
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.2s ease-in-out",
              marginTop: "24px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transform: "scale(1)",
              outline: "none",
              border: "none"
            }}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

