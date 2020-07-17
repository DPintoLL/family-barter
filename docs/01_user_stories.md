# User Stories

## As a Parent

- I want to manage the chores my kids do, while making the experience more fun and rewarding.
- I want to be able to sign up with a new account.
- I want to be able to add a new “quests” for my child to complete.
- I want to be able to browse all available quests.
- I want to be able to browse all completed quests.
- I want to be able to add rewards to a store, which my child can purchase with the gold they earned.

### When Signing Up

1. [ ] I want to be able to invite family members to the app by sending them an invite email with the family’s unique family id.

- Notes: Family id should be passed to the login page as a url parameter when clicking the link, so that they are immediately assigned to that family when signing up for the first time. If they are already logged into an account, detected in their cookies, or they click to sign in instead of creating an account, it assigns their existing account to that family. If they are already assigned to a family, it should show an error message.

2. [ ] I want to be able to select whether the family member is a parent or a child whenever I send an invite.

### When Adding Quests

1. [ ] I should be able to add a custom description to the quest.
2. [ ] I should be able to assign a quest to a category. Each category should provide a randomly selected placeholder description based on that category, if I haven’t provided one already.
       Note: Each category should have an assigned colour and unique symbol or logo.
3. [ ] I should be able to add multiple tasks or steps to a quest (to a maximum of 5 steps).
4. [ ] I want to be able to set either an amount of time within which the quest must be completed, or a specific date and time before which the quest must be completed.
5. [ ] I want to be able to assign a certain amount of gold as the reward for each quest.
6. [ ] I want a quest’s reward to default to the average amount for similar quests previously completed.
7. [ ] I should be able to set a quest as recurring.
8. [ ] I should be able to chain quests together to create stages, for chores and activities that naturally precede or follow one another.
9. [ ] When entering a new quest, there should be a single '+' button at the which reveals fields for creating the next stage of the quest.
10. [ ] I should not be able to add more than five stages to a quest-line.
11. [ ] When entering a quest title, it should provide suggestions based on both template quests and previous custom quests.

### Stretch

12. [ ] I should be able to mark a quest as "watched" and receive notifications whenever steps are completed.

### When Browsing Active Quests

1. [ ] I want to see a list of currently active quests for the whole family and which family members have accepted each quest.
2. [ ] I want to be able to accept quests myself.
3. [ ] I want to be able to edit an active quest.
4. [ ] If a family member accepted a quest, I want the quest marked as “assigned” and display the family member.
5. [ ] I want to be able to click on uncompleted quests and see which steps are marked as completed.

### When Browsing Completed Quests

1. [ ] I should see a list of all recently completed quests that have not yet been reviewed.
2. [ ] I want the option to rate how well a quest was completed, as either bronze, silver, or gold.
3. [ ] When I rate the completion of a quest, I want my kid to earn bonus gold based on the rating I provide.

### When Managing My Store

1. [ ] I want to have common rewards available on both my and my spouses stores.
2. [ ] I want any special items that I add to only be available from my store.
3. [ ] I want to be able to remove a reward from the store.
4. [ ] I want to be able to edit a reward.
5. [ ] I want to be able to offer discounts on rewards for a specific period of time.

### When Adding New Rewards

1. [ ] There should be a selection of icons and colours to choose from.
2. [ ] There should be a selection of default/template rewards to choose from.
3. [ ] There should be a toggle in the top right corner that allows me to either post a discount immediately, or schedule one.
4. [ ] The toggle should always default to an immediate discount.
5. [ ] I should be able to select the percentage and duration of a discount.
6. [ ] When clicking on the percentage or duration, a vertical slider should appear, allowing me to quickly adjust the values.
7. [ ] When scheduling a discount, there should be fields for start and end dates.
8. [ ] When I click on either the start or end date fields, a calendar view should appear, which allows me to select a date.
9. [ ] When I select a start or end date, it should replace the calendar view with one that allows me to select a time of day.

## As a Child

- I want to be able to browse the quests I can undertake.
- I want to be able to visit my parents' stores to purchase rewards.

### When Browsing Available Quests

1. [ ] I want to see a list of the quests I have currently accepted.
2. [ ] I want to see a list of the quests I have completed and whether or not they have been ranked yet.
3. [ ] Any chained quests should appear as a single quest on the list.
4. [ ] Quest-lines should have different colour borders from regular quests, to differentiate them.
5. [ ] The colours should represent how many quests have been chained together.
6. [ ] Each border colour should match one of the standard rarity colours in video games: white, green, blue, purple, orange.
7. [ ] I want to be able to see the base amount of gold earned from each stage of a quest-line.

### When Marking a Quest as Completed

1. [ ] A quest should automatically be marked as completed when all steps have been checked off.
2. [ ] I want to receive my gold immediately upon completing a quest.
3. [ ] I want to be notified immediately when the results of a quest have been ranked and I received my bonus gold.

#### Stretch

4. [ ] There should be a random chance of having “found” an equipable cosmetic item during the quest.
5. [ ] I should have the option to share a message to social media about completing the quest.
6. [ ] I should receive a bonus amount of gold for posting to social media.

### When Browsing a Store

1. [ ] I want to be able to click on an item to see its description.
2. [ ] I want to be able to double click on an item to add it to my cart.
3. [ ] I want to be able to click and drag a reward to add it to my cart.
4. [ ] I want to be prompted to confirm my purchase after clicking the button to checkout.

#### Stretch

5. I want to see a special “item of the day” in each of my parents' stores, which is a randomly selected cosmetic item that is only available to purchase for a set amount of time.
