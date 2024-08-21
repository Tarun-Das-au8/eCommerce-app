# E-commerce Product & Cart Flow

## Overview

This project is a simplified e-commerce web application built using **ReactJS**, **React-Redux**, and **TailwindCSS**. The app provides functionality for product browsing, cart management, and order placement, with a focus on responsive design and state management.

## Features

- **Product Listing Page**: Displays a list of products with details (name, image, price) with an "Add to Cart" button.
- **Product Details Page**: Shows detailed product information (name, image, price, description) with an "Add to Cart" button.
- **Cart Management**:
  - Add, remove, or update product quantities.
  - Display cart totals (item count and price).
  - The cart is accessible from any page, with a cart icon showing the item count.
- **Order Placement**: Users can place orders and are redirected to a Success Page with a confirmation message and order summary.
- **Responsive Design**: The UI is fully responsive and optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: ReactJS
- **State Management**: React-Redux
- **Styling**: TailwindCSS
- **Routing**: React Router DOM

## Project Structure

- `/components`: Contains UI components such as `ProductList`, `CartOverlay`, and more.
- `/pages`: Each page corresponds to a route, such as `Homepage`, `ProductPage`, `ProductDetails`, `SuccessPage`, and `NotFoundPage`.
- `/redux`: Stores the Redux slices for cart state management and overall application state.

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:Tarun-Das-au8/eCommerce-app.git
   cd eCommerce-app

   ```

2. **Install dependencies**:

   ```bash
   npm install

   ```

3. **Run the application**:

   ```bash
   npm start
   ```
