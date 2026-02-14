

# Abbinami MVP — Implementation Plan

## Vision
A daily outfit competition app with a warm, premium aesthetic. Users post one outfit per day, vote anonymously on others, and climb city & friends rankings. Think BeReal meets Strava, but for fashion in Milan.

---

## Phase A: Foundation & Onboarding

### 1. PWA Setup & Design System
- Configure as an installable Progressive Web App (mobile-first)
- Establish warm & premium design system: soft tones, rounded corners, elegant typography, luxury-inspired color palette
- Bottom tab navigation: Home, Vote, Rankings, Profile

### 2. Authentication & Onboarding Flow
- Sign up / login with email (via Lovable Cloud)
- Multi-step onboarding: username → age range → gender → "want to see" → style selection (multi-select: street, elegante, casual, sportivo, old money)
- Rules display screen before entering the app
- Store user preferences in database

---

## Phase B: Daily Game Loop (Core)

### 3. Daily Posting
- Upload from photo library or capture with in-app camera
- Front camera with timer + framing grid; rear camera without grid
- Support multiple photos, optional 5-second video
- One outfit competes per day — "Submit to Compete" button
- 24-hour posting window with daily reset
- Photo storage via Lovable Cloud Storage

### 4. Voting (Swipe Interface)
- Tinder-style swipe: right = like, left = pass
- Show username only — no like counts, no ranking position, no percentages
- Fully anonymous, equal weight per vote
- Gate rules: minimum 10 votes to compete; max 10 votes if you haven't posted
- Feed logic based on gender preferences set in onboarding (80/20 or 50/50 split)

### 5. Daily Performance Tracking
- Calculate and store daily like percentage internally (never shown to user)
- Track participation and voting activity

---

## Phase C: Rankings & Competition

### 6. Ranking System
- Moving average calculation (consistency > spikes)
- City leaderboard (Milano) and Friends leaderboard
- Movement indicators (↑ ↓ =) — no exact scores or percentages shown
- Daily updates

### 7. Weekly Competition
- Top performers from moving average auto-qualify
- 1v1 elimination bracket format
- Public bracket visibility, anonymous voting
- Winners receive weekly badge + profile highlight

---

## Phase D: Social & Engagement

### 8. Friends Layer
- Add friends via contact sync or invite link
- Friends-only ranking view
- No messaging, no direct rivalry mechanics

### 9. Notifications
- Random daily reminder to play
- Ranking movement alerts
- Friend played / friend joined notifications
- Weekly top reminder
- Push notifications via PWA

### 10. Profile Page
- Profile photo, username, selected styles
- Current city & friends ranking positions
- Weekly badges collection
- Consistency indicator
- Outfit history grid (past submissions)

---

## Design Principles Applied Throughout
- **Warm & premium**: Soft color palette, elegant typography, rounded UI elements, luxury feel
- **Game-first**: Competition mechanics front and center, not a social feed
- **Minimal friction**: Fast posting flow, swipe-based voting
- **No vanity metrics visible**: No like counts, no vote breakdowns

---

## Technical Approach
- **Frontend**: React + TypeScript PWA, mobile-first responsive design
- **Backend**: Lovable Cloud (database, auth, storage, edge functions)
- **Storage**: Lovable Cloud Storage for outfit photos/videos
- **Real-time**: Live ranking updates and notifications

