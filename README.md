# Video Caption App

This is a simple web application that allows users to add captions to a hosted video, specify timestamps for the captions, and view the video with synchronized captions displayed.

## Features
- Enter a video URL to load and play the video.
- Add captions with start and end timestamps.
- Display captions synchronized with the video playback.
- User-friendly interface for managing captions.

## Prerequisites
Before running the application, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/)

## Installation and Running Locally

Follow these steps to clone the repository and run the application locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
   Replace `<your-username>` and `<repo-name>` with your GitHub username and the repository name.

2. **Navigate to the Project Directory**:
   ```bash
   cd <repo-name>
   ```

3. **Install Dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   Run the following command to start the app:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## How to Use
1. **Enter Video URL**: Paste the URL of a hosted video into the input box and press Enter.
2. **Add Captions**:
   - Enter the caption text.
   - Specify the start and end times (in seconds).
   - Click "Add Caption" to save the caption.
3. **View Captions**: Captions will appear synchronized with the video during playback.
4. **Manage Captions**: View the list of captions below the video.

## Project Structure
- **`/src`**: Contains all source code files.
  - **`/components`**: React components for the application.
    - `VideoPlayer.js`: Displays the video and overlays captions.
    - `CaptionForm.js`: Form to add new captions.
  - `App.js`: Main application logic.
  - `App.css`: Styling for the application.

## Demo Video
https://github.com/user-attachments/assets/f5371596-a5c9-4912-ad56-6f20877f37ee



## Technical Decisions
1. **React for UI**: React was chosen for its modularity and ease of creating interactive components.
2. **ReactPlayer**: Used for seamless video playback with timestamp support.
3. **State Management**: Simple `useState` hooks were used to manage captions and video states.

## Possible Future Enhancements
- Validation for video URLs and captions.
- Features for editing and deleting captions.
- Export captions to `.srt` or `.vtt` file formats.
- Responsive design for better mobile experience.
- Dark mode for accessibility.

## Troubleshooting
If you encounter issues:
- Ensure all dependencies are installed (`npm install`).
- Verify that the video URL you entered is valid and accessible.
- Check the browser console for any error messages.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

For any queries, please contact [Sejal yadav] at [sejalyadav122@gmail.com].

