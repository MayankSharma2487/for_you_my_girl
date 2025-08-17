# app.py
from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Path to downloaded songs
SONG_FOLDER = os.path.join(os.getcwd(), 'static', 'songs')
os.makedirs(SONG_FOLDER, exist_ok=True)

# List of songs (read from the directory)
def get_song_list():
    return [song for song in os.listdir(SONG_FOLDER) if song.endswith('.mp3')]

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/playlist')
def playlist():
    songs = get_song_list()
    return render_template('playlist.html', songs=songs)


@app.route('/songs/<filename>')
def serve_song(filename):
    return send_from_directory('static/songs', filename, as_attachment=False)


@app.route("/gallery")
def gallery():
    images_dir = os.path.join(app.static_folder, "images")
    exts = {".png", ".jpg", ".jpeg", ".webp", ".gif"}
    images = []
    if os.path.isdir(images_dir):
        for f in sorted(os.listdir(images_dir)):
            ext = os.path.splitext(f)[1].lower()
            if ext in exts:
                images.append(f"/static/images/{f}")  # public path
    return render_template("gallery.html", images=images)

if __name__ == '__main__':
    app.run(debug=True)
