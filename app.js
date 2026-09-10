<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <title>BREAD BUCKS — Business Simulator</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
  >

  <link rel="stylesheet" href="styles.css">

  <!-- Vercel Speed Insights -->
  <script>
    window.si = window.si || function () {
      (window.siq = window.siq || []).push(arguments);
    };
  </script>

  <script
    defer
    src="/_vercel/speed-insights/script.js">
  </script>
</head>

<body>

  <!-- =========================
       LOGIN / SIGN UP
  ========================== -->

  <div id="auth" class="auth-wrap">

    <div class="auth-card">

      <div class="brand big">
        <span>🍞</span>

        <div>
          <b>BREAD BUCKS</b>
          <small>BUILD. INVEST. GROW.</small>
        </div>
      </div>

      <p class="muted">
        A virtual business simulation.
        BB has no real-money value.
      </p>

      <div class="tabs">

        <button
          class="tab active"
          data-auth="login">
          Log in
        </button>

        <button
          class="tab"
          data-auth="signup">
          Sign up
        </button>

      </div>

      <form id="authForm">

        <input
          id="authUser"
          type="text"
          placeholder="Username"
          minlength="3"
          maxlength="30"
          autocomplete="username"
          required
        >

        <input
          id="authPass"
          type="password"
          placeholder="Password"
          minlength="6"
          autocomplete="current-password"
          required
        >

        <button
          class="primary full"
          type="submit"
          id="authSubmit">
          Log in
        </button>

      </form>

      <div id="authMsg" class="msg"></div>

      <button
        id="demoBtn"
        class="ghost full">
        Try demo account
      </button>

    </div>

  </div>


  <!-- =========================
       MAIN APPLICATION
  ========================== -->

  <div id="app" class="hidden">

    <header class="topbar">

      <div class="brand">

        <span>🍞</span>

        <div>
          <b>BREAD BUCKS</b>
          <small>BUSINESS SIMULATOR</small>
        </div>

      </div>


      <div class="top-actions">

        <div class="balance">
          <span>BB</span>
          <strong id="balance">10,000</strong>
        </div>

        <span
          id="username"
          class="user-pill">
        </span>

        <button
          id="logout"
          class="ghost">
          Log out
        </button>

      </div>

    </header>


    <div class="layout">

      <aside class="sidebar">

        <button
          class="nav active"
          data-page="dashboard">
          ⌂ <span>Dashboard</span>
        </button>

        <button
          class="nav"
          data-page="companies">
          ▣ <span>My Companies</span>
        </button>

        <button
          class="nav"
          data-page="market">
          ◈ <span>Marketplace</span>
        </button>

        <button
          class="nav"
          data-page="investments">
          ↗ <span>Investments</span>
        </button>

        <button
          class="nav"
          data-page="leaderboard">
          🏆 <span>Leaderboard</span>
        </button>

        <button
          class="nav"
          data-page="transactions">
          ☷ <span>Transactions</span>
        </button>

      </aside>


      <main id="main"></main>

    </div>

  </div>


  <div
    id="toast"
    class="toast">
  </div>


  <!-- Supabase -->
  <script
    src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2">
  </script>

  <!-- Game -->
  <script src="app.js"></script>

</body>
</html>
npm i @vercel/analytics
import { Analytics } from "@vercel/analytics/next"
