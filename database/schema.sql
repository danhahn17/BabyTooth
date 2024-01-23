set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "calendar" (
  "calendarId" serial PRIMARY KEY,
  "userId" integer,
  "date" integer,
  "time" integer,
  "createdAt" timestamptz
);

CREATE TABLE "users" (
  "userId" integer PRIMARY KEY,
  "firstName" text,
  "lastName" text,
  "username" text,
  "hashedPassword" text,
  "email" text,
  "phone" integer,
  "createdAt" timestamptz
);

ALTER TABLE "calendar" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");
