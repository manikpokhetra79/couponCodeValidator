# couponCodeValidator Backend
Live Link to the App : https://manikpokhetra79.github.io/couponCodeValidatorClient/
Objective :
Create an application to create and validate the coupon codes that support given features.

Description :

1. The endpoint should take the total amount of the cart and a coupon code (string) and return if the coupon code is valid or not.
2. If valid, it should also return the discount amount that needs to be deducted from the total cart value.
3. Coupon Validation should include the following rules:

- Coupons will have a start date and end date. Post end date, the coupon is considered as expired.
- Coupon code can only be applied on a cart with a minimum amount defined for each of the coupons.

4. Coupon codes can be of two types.
5. Flat discount, which will deduct a predefined amount from the total cart value
6. Percentage discount, which will deduct a percentage from the cart value. It should also define a maximum amount that can be discounted using this percentage discount.
7. It should also have endpoints to create and list coupon codes.

How to Start / Install Project
- Clone this project
- Start by installing npm if you don't have it already.
- Navigate to Project Directory
- Run following commands : -- npm install -- npm install nodemon -- npm start 
- These commands will install all required dependencies for the project
