function createImageGallery() {
    // Replace this with your folder ID
    const FOLDER_ID = 'YOUR_FOLDER_ID_HERE';

    // Create a new presentation
    const presentation = SlidesApp.create('Image Gallery');

    // Get the folder and its files
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const files = folder.getFiles();

    // Delete the default first slide
    const slides = presentation.getSlides();
    if (slides.length > 0) {
      presentation.getSlides()[0].remove();
    }

    // Loop through each file in the folder
    while (files.hasNext()) {
      const file = files.next();

      // Check if the file is an image
      if (isImageFile(file.getMimeType())) {
        // Create a new slide
        const slide = presentation.appendSlide();

        // Get the image blob
        const imageBlob = file.getBlob();

        // Add the image to the slide
        const image = slide.insertImage(imageBlob);

        // Get slide dimensions
        const slideWidth = presentation.getPageWidth();
        const slideHeight = presentation.getPageHeight();

        // Resize and center the image while maintaining aspect ratio
        const originalWidth = image.getWidth();
        const originalHeight = image.getHeight();

        // Calculate scaling factors
        const widthScale = (slideWidth * 0.9) / originalWidth;
        const heightScale = (slideHeight * 0.9) / originalHeight;
        const scale = Math.min(widthScale, heightScale);

        // Apply new dimensions
        const newWidth = originalWidth * scale;
        const newHeight = originalHeight * scale;

        // Center the image on the slide
        const leftPosition = (slideWidth - newWidth) / 2;
        const topPosition = (slideHeight - newHeight) / 2;

        image.setWidth(newWidth)
             .setHeight(newHeight)
             .setLeft(leftPosition)
             .setTop(topPosition);
      }
    }

    // Log the URL of the created presentation
    Logger.log('Presentation URL: ' + presentation.getUrl());
  }

  // Helper function to check if file is an image
  function isImageFile(mimeType) {
    const imageTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/webp'
    ];
    return imageTypes.includes(mimeType);
  }
