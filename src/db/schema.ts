import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  displayName: text('display_name'),
  photoUrl: text('photo_url'),
  dailyGoalTarget: integer('daily_goal_target').default(10).notNull(),
  currentStreak: integer('current_streak').default(0).notNull(),
  longestStreak: integer('longest_streak').default(0).notNull(),
  lastPracticeDate: text('last_practice_date'),
  masteredCharsJson: text('mastered_chars_json').default('[]').notNull(),
  bookmarkedCharsJson: text('bookmarked_chars_json').default('[]').notNull(),
  dailyStudiedJson: text('daily_studied_json').default('{}').notNull(),
  practiceHistoryJson: text('practice_history_json').default('[]').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
