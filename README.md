# Next.js Todo App with Supabase and Server Actions

This project is a simple Todo application built with Next.js, utilizing Supabase for backend services and Next.js Server Actions for handling data mutations.

## Features

- **Create Todos:** Users can add new tasks to their todo list.
- **Read Todos:** Displays all existing todos from the Supabase database.
- **️Delete Todos:** Allows users to remove tasks from the list.
- **Server Actions:** Uses Next.js Server Actions for efficient and secure data handling.
- **Supabase Integration:** Leverages Supabase for database management.
- **Tailwind CSS:** Styles the application with a modern and responsive design.

## Technologies Used

- **<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js Logo" width="20" height="20"> Next.js:** A React framework for building server-rendered applications.
- **<img src="https://img.icons8.com/color/512/supabase.png" alt="Supabase Logo" width="20" height="20"> Supabase:** An open-source Firebase alternative for backend services.
- **<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" width="20" height="20"> Tailwind CSS:** A utility-first CSS framework for styling the application.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Supabase account

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/romaopedro199/nextjs-server-actions-supabase.git](https://github.com/romaopedro199/nextjs-server-actions-supabase.git)
    cd nextjs-server-actions-supabase
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Supabase:**

    - Create a new project on [Supabase](https://supabase.com/).
    - Create a `todos` table with the following schema:

      ```sql
      create table todos (
        id serial primary key,
        todo text
      );
      ```

    - Obtain your Supabase project URL and anon key from the Supabase dashboard (Project settings -> API).
    - Create a `.env.local` file in the root of the project and add the following environment variables:

      ```
      NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
      NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
      ```

4.  **Run the application:**

    ```bash
    npm run dev
    ```

5.  **Open your browser and navigate to `http://localhost:3000/`.**

## Server Actions

This project utilizes Next.js Server Actions to handle data mutations on the server. The following actions are defined:

- **`addTodo.js`:** Adds a new todo to the Supabase database.
- **`deleteTodo.js`:** Deletes a todo from the Supabase database.

## Notes

- This project demonstrates the use of Next.js Server Actions with Supabase for efficient data handling.
- The application is styled using Tailwind CSS for a modern and responsive design.
- The Supabase client is initialized in `lib/supabaseClient.js` for easy reuse.
- the todo page is located in the /todo route.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
