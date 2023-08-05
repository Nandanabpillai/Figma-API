
figma.showUI(__html__);

figma.ui.resize(320, 220);

figma.ui.onmessage = msg => {
  if (msg.type === 'categories') {
    const parentFrame = figma.createFrame()
    parentFrame.x = -500
    parentFrame.y = -500
    parentFrame.resize(1222, 986)
    
    const rect1 = figma.createRectangle()
    rect1.cornerRadius = 8
    rect1.x = -400
    rect1.y = -324
    rect1.resize(510, 548)
    rect1.fills = [{ type: 'SOLID', color: { r: 0.7, g: 0.9, b: 0.8 } }]


    const rect2 = figma.createRectangle()
    rect2.cornerRadius = 8
    rect2.x = 173
    rect2.y = -324
    rect2.resize(510, 548)
    rect2.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.8, b: 0.8 } }]
    

    async function loadFonts() {
      try {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }
    
    async function updateTextNode() {
      // Load the required fonts first
      await loadFonts();
    
      // Now you can update the text node
      const textNode1 = figma.createText();
      textNode1.characters = "Movies";
      textNode1.fontSize = 50;
      textNode1.x = -229;
      textNode1.y = -77;
      figma.currentPage.appendChild(textNode1);
      figma.currentPage.selection = [textNode1];
      figma.viewport.scrollAndZoomIntoView([textNode1]);
      
      const textNode2 = figma.createText();
      textNode2.characters = "Books";
      textNode2.fontSize = 50;
      textNode2.x = 355;
      textNode2.y = -77;
      figma.currentPage.appendChild(textNode2);
      figma.currentPage.selection = [textNode2];
      figma.viewport.scrollAndZoomIntoView([textNode2]);
      
      const textNode3 = figma.createText();
      textNode3.characters = "Bucket List";
      textNode3.fontSize = 65;
      textNode3.x = -35;
      textNode3.y = -473;
      figma.currentPage.appendChild(textNode3);
      figma.currentPage.selection = [textNode3];
      figma.viewport.scrollAndZoomIntoView([textNode3]);

      figma.closePlugin();
    }
    
    // Call the function to update the text node and load fonts
    updateTextNode();
    const parentFrame1 = figma.createFrame()
    parentFrame1.x = -1881
    parentFrame1.y = -500
    parentFrame1.resize(1222, 986)

  }
}