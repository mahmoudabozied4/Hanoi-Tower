# Tower of Hanoi Visualizer

A clean, modern, and animated **Tower of Hanoi** visualizer built using **HTML, CSS, and JavaScript**.

This project demonstrates the famous recursive Tower of Hanoi algorithm with real-time visualization of:

* Peg movements
* Animated disc transfers
* Recursion call stack
* Adjustable speed
* Dynamic disc count setup

---

## 🚀 Features

### 🎮 Interactive Controls

* Set the number of discs at start
* Adjustable animation delay (speed control)
* Start and Reset buttons

### 🎨 Modern UI

Uses a custom blue-themed palette:

* **Prussian Blue** (#00072d)
* **Deep Navy** (#001c55)
* **Imperial Blue** (#0a2472)
* **Bright Marine** (#0e6ba8)
* **Icy Blue** (#a6e1fa)

The layout includes:

* Three pegs (A, B, C)
* Smooth disk animations
* Highlighted algorithm steps
* Visual call stack

### 🧠 Algorithm Visualization

The Tower of Hanoi recursion is displayed live:

* The call stack updates with each recursive call
* Discs move according to algorithmic order
* Real-time rendering of pegs and discs

---

## 📂 Project Structure

```
📁 project
├── index.html      # Main HTML file
├── style.css       # Theme + layout styles
├── main.js         # Tower of Hanoi logic + renderer
└── README.md       # Project documentation
```

---

## 🛠️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/hanoi-visualizer.git
```

2. Open the project folder:

```bash
cd hanoi-visualizer
```

3. Open `index.html` in your browser:

```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

No build tools required — everything runs in the browser.

---

## 🎥 Live Demo (Optional)

Add a link here if you host on GitHub Pages:

```
https://yourusername.github.io/hanoi-visualizer/
```

---

## 🧩 How It Works

The recursion function:

```js
hanoi(n, from, aux, to)
```

Performs:

1. Move `n-1` discs from **A → B**
2. Move largest disc from **A → C**
3. Move `n-1` discs from **B → C**

The UI updates each step with animated disc movement and stack updates.

---

## 📸 Screenshots (Optional)

Add images like:

```
/images/ui.png
/images/stack.png
```

---

## 🤝 Contributing

Pull requests are welcome!
If you'd like to improve the design, animation, or functionality:

* Fork the repo
* Create a new branch
* Submit a pull request

---

## 📝 License

MIT License — free to use in personal or commercial projects.

---

## ⭐ Acknowledgements

Made with love for recursion, algorithms, and beautiful UI design.

If you like the project, **give it a star ⭐ on GitHub**!
