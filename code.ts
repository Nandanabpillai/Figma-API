
figma.showUI(__html__);

figma.ui.resize(320, 220);

figma.ui.onmessage = msg => {
  if (msg.type === 'categories') {
    const parentFrame = figma.createFrame()
    parentFrame.x = -500
    parentFrame.y = -500
    parentFrame.resize(1222, 1933)

    const rect1 = figma.createRectangle()
    rect1.cornerRadius = 4
    // const myFontLoadingFunction = async () => {
    //   await figma.loadFontAsync({ family: "Work Sans", style: "Bold" })
    // }
    
    // // Another function where we use the loaded font
    // const myAnotherFunction = () => {
    //   const myTextLayer = figma.createText()
    //   myTextLayer.fontName = { family: "Work Sans", style: "Bold" }
    //   myTextLayer.textCase = "UPPER"
    //   myTextLayer.characters = "This is my title"
    //   figma.currentPage.appendChild(myTextLayer);
    // }
    
    // myFontLoadingFunction().then(() => {
    //   myAnotherFunction()
    // })

    rect1.x = -400
    rect1.y = -418
    rect1.resize(400, 400)
    rect1.fills = [{ type: 'SOLID', color: { r: 0.7, g: 0.9, b: 0.8 } }]

    const rect2 = figma.createRectangle()
    rect2.cornerRadius = 4
    rect2.x = 189
    rect2.y = -418
    rect2.resize(400, 400)
    rect2.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.8, b: 0.8 } }]

    const textNode = figma.createText(); // Create a new text node

    // Set the properties for the text node
    textNode.characters = "Hello, Figma API!"; // Set the text content
    textNode.x = 100; // X-coordinate
    textNode.y = 150; // Y-coordinate
  
    // Set other text properties (optional)
    textNode.fontName = { family: "Roboto", style: "Regular" };
    textNode.fontSize = 24;
    textNode.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
  
    // Add the text node to the current page
    figma.currentPage.appendChild(textNode);
  
    // Select the newly created text node
    figma.currentPage.selection = [textNode];
  
    // Zoom to the selected node
    figma.viewport.scrollAndZoomIntoView([textNode]);
    figma.closePlugin("see categories")
  }
}