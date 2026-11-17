import { useState } from "react";
import { API_BASE, adminToken } from "./config";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const json = await res.json().catch(() => ({}));
      const token = json?.data?.token ?? json?.token;
      if (!res.ok || !token) throw new Error(json?.message || "Invalid admin credentials");
      adminToken.set(token);
      onLogin(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const input = {
    width: "100%", boxSizing: "border-box", border: "1px solid #E5E7EB", borderRadius: 10,
    padding: "10px 12px", fontSize: 14, outline: "none", color: "#111827", background: "#fff",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F9FAFB", padding: 16, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 360, background: "#fff", border: "1px solid #E5E7EB", borderRadius: 16, padding: 28 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#111827" }}>Edu<span style={{ color: "#2563EB" }}>XL</span></div>
        <div style={{ fontSize: 13, color: "#9CA3AF", margin: "4px 0 22px" }}>Admin sign in</div>

        <label style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>Email</label>
        <input type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} style={{ ...input, margin: "6px 0 14px" }} />

        <label style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>Password</label>
        <input type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ ...input, margin: "6px 0 18px" }} />

        {error && <div style={{ fontSize: 12, color: "#DC2626", marginBottom: 12 }}>{error}</div>}

        <button type="submit" disabled={busy} style={{ width: "100%", border: "none", borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600, color: "#fff", background: busy ? "#93C5FD" : "#2563EB", cursor: busy ? "default" : "pointer" }}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
