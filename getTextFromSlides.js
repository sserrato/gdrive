function extractTextFromSlides() {
  // Get the active presentation
  var presentation = SlidesApp.getActivePresentation();
  var slides = presentation.getSlides();
  var markdownOutput = '';

  // Iterate through each slide
  for (var i = 0; i < slides.length; i++) {
      var slide = slides[i];
      var pageElements = slide.getPageElements();

      // Add the slide number to the output
      markdownOutput += '## Slide ' + (i + 1) + '\n\n';

      // Check if there's at least one element in the slide to use as a header
      if (pageElements.length > 0) {
          var headerElement = pageElements[0];
          if (headerElement.getPageElementType() == SlidesApp.PageElementType.SHAPE) {
              var headerShape = headerElement.asShape();
              try {
                  var headerText = headerShape.getText().asString();
                  markdownOutput += '# ' + headerText + '\n\n';
              } catch (e) {
                  Logger.log('Error extracting text from header shape on slide ' + (i + 1) + ': ' + e.message);
              }
          }
      }

      // Iterate through each element on the slide, starting from the second one
      for (var j = 1; j < pageElements.length; j++) {
          var element = pageElements[j];
          if (element.getPageElementType() == SlidesApp.PageElementType.SHAPE) {
              var shape = element.asShape();
              try {
                  var textRange = shape.getText();
                  var text = textRange.asString();

                  // Apply different markdown formatting based on text properties
                  if (textRange.getTextStyle().isBold()) {
                      markdownOutput += '## ' + text + '\n\n';
                  } else {
                      markdownOutput += text + '\n\n';
                  }
              } catch (e) {
                  Logger.log('Error extracting text from shape on slide ' + (i + 1) + ', element ' + (j + 1) + ': ' + e.message);
              }
          }
      }

      markdownOutput += '\n'; // Add a line break after each slide
  }

  // Overwrite existing file if it exists, otherwise create a new one
  var fileName = 'ExtractedSlidesMarkdown.md';
  var existing = DriveApp.getFilesByName(fileName);
  var file;
  if (existing.hasNext()) {
    file = existing.next();
    file.setContent(markdownOutput);
  } else {
    file = DriveApp.createFile(fileName, markdownOutput);
  }
  Logger.log('Markdown text extracted and saved to: ' + file.getUrl());
}
