# Project image folders

Each product has its own folder:

```text
projects/
  jury-hammer/
    hero-full.png
    gallery/
      image_1.png
      image_2.png
  ...
```

Put additional screenshots in the matching `gallery/` folder. Then add each public path to that product's `gallery` array in `src/data/projects.ts`, for example:

```ts
gallery: [
  "/images/projects/jury-hammer/gallery/about-page.png",
  "/images/projects/jury-hammer/gallery/mobile-view.png",
],
```

The project detail page will render the gallery automatically when the array has images.
