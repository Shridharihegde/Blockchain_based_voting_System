# 🗳️ Decentralized Voting  (weVote)

## Introduction
This project is a decentralized voting platform built using blockchain technology to ensure secure, transparent, and immutable elections. It features two main roles: **Admin** and **Voter**. Voters need to create and verify their accounts before participating in elections, while admins manage the polls and elections.

![Add This First](./images/addthisfirst.png)

## Technology Stack
- **TypeScript**
- **Solidity**
- **React**
- **Ganache**
- **MySQL**

## Key Features
- **🔏 Voter Account Verification**: Voters must verify their accounts to vote.
- **🗳️ Single Vote Enforcement**: Ensures each voter can only vote once.
- **📅 Election Management**: Admins can create, manage, and end elections.
- **🔒 Immutable Voting Records**: Uses blockchain to secure votes.
- **📊 Live Vote Tracking**: Real-time tracking of votes.

## System Modules
### Admin Capabilities
- Create and manage polls
- End elections
- Verify voter accounts

### Voter Capabilities
- Create and verify account
- Login to vote
- Cast a single vote per election

## Getting Started
### Installation Steps
1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-friend-repo/blockchain-voting-system.git
    cd blockchain-voting-system
    ```

2. **Install Required Dependencies**
    ```bash
    npm install
    ```

3. **Launch Ganache**
    ```bash
    ganache-cli
    ```

4. **Compile and Deploy Smart Contracts**
    ```bash
    truffle compile
    truffle migrate
    ```

5. **Start the Application**
    ```bash
    npm start
    ```

## How to Use
### Home Page
![Landing Page](./images/landing.png)

### User Registration
![Create Account](./images/create_acc.png)

### User Login
![Login](./images/login.png)

### Unverified Login Attempt
![Unverified Login](./images/signin_attempt_notverified.png)

### User Profile
![Profile](./images/profile.png)

### Admin Functions
- **Create Poll**
    ![Create Poll](./images/create_poll.png)
- **Verify Users**
    ![Verify Users](./images/verify_users_admin.png)
- **Vote Administration**
    ![Vote Administration](./images/vote_admin.png)

### Voting Process
![Voter Voting](./images/voter_voting.png)

