# Firebase Snapshot Error: Accessing Properties Before Exists Check

This repository demonstrates a common error when working with Firebase Firestore: attempting to access document properties before verifying the document's existence using `snapshot.exists`.  This can lead to unexpected errors and crashes in your application.

The `bug.js` file illustrates the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

Accessing properties of a Firestore document snapshot before checking `snapshot.exists` can result in a runtime error if the document doesn't exist.  This is because the `snapshot.data()` method will return `undefined`, and attempting to access properties of `undefined` will throw an error.

## Solution

Always check `snapshot.exists` before attempting to access any properties of the `snapshot.data()` object.  This ensures that your code handles cases where the document might not exist gracefully.

## How to Reproduce

1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project (replace placeholders with your project details in `bug.js` and `bugSolution.js`).
4. Run the `bug.js` file to see the error.
5. Run the `bugSolution.js` file to see the corrected code.
