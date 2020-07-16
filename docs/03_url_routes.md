# Routes

## /

### GET Method

Return the index page.

## /register

### GET Method

Return the user registration page (allow a registration code parameter).

### POST Method

Create new user.

## /login

### GET Method

Return the login page.

### POST Method

Login a user.

## /{family_id}

### GET Method

Return family index page.

## /{family_id}/quests

### GET Method

Return list of most recent quests.

### POST Method

Add a new quest.

## /{family_id}/quests/active

### GET Method

Return list of currently active quests.

## /{family_id}/quests/completed

### GET Method

Return list of completed quests.

## /{family_id}/quests/{quest_id}

### GET Method

Return quest object (should have a "next" property with the quest_id of the next stage of the quest, if available).

### PUT Method

Send edited quest to server.

### DELETE Method

Remove quest from server.

## /{family_id}/quests/{quest_id}/accept

### POST Method

Assign user to active quest.

## /{family_id}/quests/{quest_id}/edit

### GET Method

Return edit quest page for an active quest.

## /{family_id}/quests/{quest_id}/reviews

### GET Method

Return reviews for a completed quest.

### POST Method

Submit quest review to server.

## /{family_id}/quests/{quest_id}/reviews/{review_id}

### GET Method

Return details of quest review.

## /{family_id}/quests/{quest_id}/steps/{step_id}/complete

### POST Method

Mark a quest step as completed.

## /{family_id}/rewards

### GET Method

Return list of available rewards.

### POST Method

Create a new reward.

## /{family_id}/rewards/{reward_id}

### GET Method

Get details of a reward.

### PUT Method

Update reward on server.

## /{family_id}/rewards/{reward_id}/edit

### GET Method

Return edit reward page.

## /{family_id}/stores

### GET Method

Get list of available stores.

## /{family_id}/stores/{store_id}

### GET Method

Get details of store (including list of available rewards and discounts).

## /{family_id}/stores/{store_id}/rewards/{reward_id}

### GET Method

Get details of a reward.

## /{family_id}/stores/{store_id}/rewards/{reward_id}/purchase

### POST Method

Purchase a reward from a store.

## /{family_id}/users

### GET Method

Return list of users in a family.

## /{family_id}/users/{user_id}

### GET Method

Get details of a specific user in a family.

## /{family_id}/users/{user_id}/gold

### GET Method

Return amount of gold available to a user.

## /{family_id}/users/{user_id}/rewards

### GET Method

Return rewards in user's inventory.

## /{family_id}/users/{user_id}/store

### GET Method

Return details of user's store.

### PUT Method

Update details of user's store.

## /{family_id}/users/{user_id}/store/rewards

### POST Method

Add rewards to store.
