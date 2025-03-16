# A Layered Architecture for Touch-Driven Web Applications: An OSI-Inspired Approach

## Introduction
This draft has the purpose of elaborating on a agnostic architechture (not framework bound), when designing
web-view driven touch-enabled realtime applications. The benefits would be:

* Identify separations of concerns for simpler developement and task-assignment
* Promote less error-prone long-term development
* Less bound to specific JS-framework
And to be honest:
* A way for me to learn Svelte. 

The approach was developed for a **mobile Digital Audio Workstation (DAW)** that communicates with a backend using **RPC and WebSockets**, but it can be applied to other real-time interactive applications.


## Ok, here we go!

---

## Layer 1: Webview Container
- **Purpose**: Provides the foundation for rendering the application within a webview environment.
- **Responsibilities**:
- Ensures a capable webview container is initialized.
- Handles **fixed proportions & scaling** for responsive design.
- Can be implemented as a **browser-based app, or a WebView** inside a mobile app.

### Files
- /static/frame.html

---

## Layer 2: Global Resources & Response APIs
- **Purpose**: Defines shared resources and core interaction methods for handling **touch input** and **backend communication**.  
- **Responsibilities**:
- Provides global assets (fonts, stylesheets, icons, etc.).
- Turn of default context-menus etc for optimal touch-performance 
- Manages **multitouch events**, mapping them to predefined interaction types.
- Handles **WebSocket messages** for real-time updates.
- **Defines touch interaction types**, such as:
  - **Knobs** (support delta-X and delta-Y with different precision).
  - **Keys** (on/off events with "slide-over" triggering).
  - **Sliders** (single-direction movements for continuous control).

### Files
- /static/global.css
- /static/fonts..
- /src/app.html
- /src/+layout.svelte

---

## Layer 3: Components
- **Purpose**: Defines reusable UI elements that **inherit touch behaviors** from Layer 2.  
- **Responsibilities**:
- Components such as knobs, buttons, sliders, and pads.
- Each component has **individual styling** but shares standardized interaction behavior.
- Fully initialized components can communicate with **WebSockets** and respond to real-time state updates.
- Components are typically **mounted inside modules** (Layer 4).

### Files
- /src/lib/components

---

## Layer 4: Module
- **Purpose**: Groups related components into **functional units** such as synthesizers, effects, or midi-processors.  
- **Responsibilities**:
- Uses **multiple components** (from Layer 3) to create interactive elements.
- Modules can represent **audio effects, synth engines, or event processors**.
- Each module has a corresponding **backend class hierarchy**, ensuring consistency between frontend and backend state.
- Modules **register & de-register** touch events dynamically as they become active.
-

### Files
??

---

## Layer 5: Page / Module Host
- **Purpose**: Hosts **one or many modules** and map their settings to a store.  
- **Responsibilities**:
- State data is probably here. Two identical effects can be chained, with diffrent settings. 
- Loads and unloads **modules dynamically**.
- Manages **visibility, layout, and lifecycle** of modules.
- Uses **RPC requests to set up module layouts** but avoids real-time UI modifications.

### Files
??

---

## Layer 6: Window Manager
- **Purpose**: Handles **popup windows, modals, and overlays**.  
- **Responsibilities**:
- Defines modal behavior (blocking/non-blocking popups).
- Supports **draggable windows** for flexible UI arrangements.
- Windows can be triggered by **backend WebSocket messages**, allowing dynamic UI updates.

### Files
??

---

## Layer 7: App Definition
- **Purpose**: Defines the **final UX structure**, ensuring a consistent experience across the app.  
- **Responsibilities**:
- Provides the **overall app layout and navigation flow**.
- Ensures UI/UX consistency across pages, modules, and components.
- Serves as the **entry point for defining user interactions**.
- Helps separate **functional design (lower layers) from UX decisions**.

### Files
??

