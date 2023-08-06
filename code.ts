figma.showUI(__html__, {width: 400, height: 400, title: 'Diary Plugin'});
// figma.ui.resize(400,400)
figma.ui.onmessage = async msg => {
  if (msg.type === 'submit') {
    // console.log(msg.arr)
    for(let i=0;i<msg.arr.length;i++) 
    {
        if (msg.arr[i] === 'Calendar')
        {
            const parentFrame = figma.createFrame()
            parentFrame.x = -149
            parentFrame.y = -236
            parentFrame.resize(400, 400)
            const a = -150;
            const b = -100;
            async function loadFonts() {
              try {
                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
              } catch (error) {
                console.error("Error loading fonts:", error);
              }
            }
            async function updateMonth() {
              // Load the required fonts first
              await loadFonts();
            
              // Now you can update the text node
              const textNode2 = figma.createText();
              textNode2.characters = "August 2023";
              textNode2.fontSize = 40;
              textNode2.x = -62;
              textNode2.y = -212;
              figma.currentPage.appendChild(textNode2);
              figma.currentPage.selection = [textNode2];
              figma.viewport.scrollAndZoomIntoView([textNode2]);
            }
            updateMonth()
            async function updateDay1() {
              // Load the required fonts first
              await loadFonts();
            const textNode3 = figma.createText();
                textNode3.characters = "S";
                textNode3.fontSize = 20;
                textNode3.x = -100;
                textNode3.y = -150;
                figma.currentPage.appendChild(textNode3);
                figma.currentPage.selection = [textNode3];
                figma.viewport.scrollAndZoomIntoView([textNode3]);
            }
            async function updateDay2() {
              // Load the required fonts first
              await loadFonts();
                const textNode4 = figma.createText();
                textNode4.characters = "M";
                textNode4.fontSize = 20;
                textNode4.x = -50;
                textNode4.y = -150;
                figma.currentPage.appendChild(textNode4);
                figma.currentPage.selection = [textNode4];
                figma.viewport.scrollAndZoomIntoView([textNode4]);
            }
            async function updateDay3() {
              // Load the required fonts first
              await loadFonts();
                const textNode5 = figma.createText();
                textNode5.characters = "T";
                textNode5.fontSize = 20;
                textNode5.x = -0;
                textNode5.y = -150;
                figma.currentPage.appendChild(textNode5);
                figma.currentPage.selection = [textNode5];
                figma.viewport.scrollAndZoomIntoView([textNode5]);
            }
            async function updateDay4() {
              // Load the required fonts first
              await loadFonts();
                const textNode6 = figma.createText();
                textNode6.characters = "W";
                textNode6.fontSize = 20;
                textNode6.x = 50;
                textNode6.y = -150;
                figma.currentPage.appendChild(textNode6);
                figma.currentPage.selection = [textNode6];
                figma.viewport.scrollAndZoomIntoView([textNode6]);
            }
            async function updateDay5() {
              // Load the required fonts first
              await loadFonts();
                const textNode7 = figma.createText();
                textNode7.characters = "T";
                textNode7.fontSize = 20;
                textNode7.x = 100;
                textNode7.y = -150;
                figma.currentPage.appendChild(textNode7);
                figma.currentPage.selection = [textNode7];
                figma.viewport.scrollAndZoomIntoView([textNode7]);
            }
            async function updateDay6() {
              // Load the required fonts first
              await loadFonts();
                const textNode8 = figma.createText();
                textNode8.characters = "F";
                textNode8.fontSize = 20;
                textNode8.x = 150;
                textNode8.y = -150;
                figma.currentPage.appendChild(textNode8);
                figma.currentPage.selection = [textNode8];
                figma.viewport.scrollAndZoomIntoView([textNode8]);
            }
            async function updateDay7() {
              // Load the required fonts first
              await loadFonts();
                const textNode9 = figma.createText();
                textNode9.characters = "S";
                textNode9.fontSize = 20;
                textNode9.x = 200;
                textNode9.y = -150;
                figma.currentPage.appendChild(textNode9);
                figma.currentPage.selection = [textNode9];
                figma.viewport.scrollAndZoomIntoView([textNode9]);
            }
            updateDay1()
            updateDay2()
            updateDay3()
            updateDay4()
            updateDay5()
            updateDay6()
            updateDay7()
            for(let j=3;j<=7;j++) 
                {
                    
                    async function updateTextNode() {
                      // Load the required fonts first
                      await loadFonts();
                    
                      // Now you can update the text node
                      const textNode1 = figma.createText();
                      textNode1.characters = (j - 2).toString();
                      textNode1.fontSize = 30;
                      textNode1.x = 0 + (j - 3)* 50;
                      textNode1.y = -100;
                      figma.currentPage.appendChild(textNode1);
                      figma.currentPage.selection = [textNode1];
                      figma.viewport.scrollAndZoomIntoView([textNode1]);
                    }
                    updateTextNode();
                }
                
                

                for(let j=1;j<=7;j++) 
                {
                    
                    async function updateTextNode() {
                      // Load the required fonts first
                      await loadFonts();
                    
                      // Now you can update the text node
                      const textNode1 = figma.createText();
                      textNode1.characters = (j + 5).toString();
                      textNode1.fontSize = 30;
                      textNode1.x = a + j * 50;
                      textNode1.y = b + 50;
                      figma.currentPage.appendChild(textNode1);
                      figma.currentPage.selection = [textNode1];
                      figma.viewport.scrollAndZoomIntoView([textNode1]);
                    }
                    updateTextNode();
                }

                for(let j=1;j<=7;j++) 
                {
                    
                    async function updateTextNode() {
                      // Load the required fonts first
                      await loadFonts();
                    
                      // Now you can update the text node
                      const textNode1 = figma.createText();
                      textNode1.characters = (j + 12).toString();
                      textNode1.fontSize = 30;
                      textNode1.x = a + j * 50;
                      textNode1.y = b + 100;
                      figma.currentPage.appendChild(textNode1);
                      figma.currentPage.selection = [textNode1];
                      figma.viewport.scrollAndZoomIntoView([textNode1]);
                    }
                    updateTextNode();
                }

                for(let j=1;j<=7;j++) 
                {
                    
                    async function updateTextNode() {
                      // Load the required fonts first
                      await loadFonts();
                    
                      // Now you can update the text node
                      const textNode1 = figma.createText();
                      textNode1.characters = (j + 19).toString();
                      textNode1.fontSize = 30;
                      textNode1.x = a + j * 50;
                      textNode1.y = b + 150;
                      figma.currentPage.appendChild(textNode1);
                      figma.currentPage.selection = [textNode1];
                      figma.viewport.scrollAndZoomIntoView([textNode1]);
                    }
                    updateTextNode();
                }

                for(let j=1;j<=5;j++) 
                {
                    
                    async function updateTextNode() {
                      // Load the required fonts first
                      await loadFonts();
                    
                      // Now you can update the text node
                      const textNode1 = figma.createText();
                      textNode1.characters = (j + 26).toString();
                      textNode1.fontSize = 30;
                      textNode1.x = a + j * 50;
                      textNode1.y = b + 200;
                      figma.currentPage.appendChild(textNode1);
                      figma.currentPage.selection = [textNode1];
                      figma.viewport.scrollAndZoomIntoView([textNode1]);
                    }
                    updateTextNode();
                }
            
        
        }
        
        if (msg.arr[i] === 'BucketList') {
          const parentFrame = figma.createFrame()
      parentFrame.x = 0
      parentFrame.y = 40
      parentFrame.resize(1222, 836)
      
      const rect1 = figma.createRectangle()
      rect1.cornerRadius = 8
      rect1.x = 66
      rect1.y = 218
      rect1.resize(510, 479)
      rect1.fills = [{ type: 'SOLID', color: { r: 0.7, g: 0.9, b: 0.8 } }]


      const rect2 = figma.createRectangle()
      rect2.cornerRadius = 8
      rect2.x = 643
      rect2.y = 218
      rect2.resize(510, 479)
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
        const textNodea = figma.createText();
        textNodea.characters = "Movies";
        textNodea.fontSize = 50;
        textNodea.x = 237;
        textNodea.y = 427;
        figma.currentPage.appendChild(textNodea);
        figma.currentPage.selection = [textNodea];
        figma.viewport.scrollAndZoomIntoView([textNodea]);
        
        const textNodeb = figma.createText();
        textNodeb.characters = "Books";
        textNodeb.fontSize = 50;
        textNodeb.x = 825;
        textNodeb.y = 427;
        figma.currentPage.appendChild(textNodeb);
        figma.currentPage.selection = [textNodeb];
        figma.viewport.scrollAndZoomIntoView([textNodeb]);
        
        const textNodec = figma.createText();
        textNodec.characters = "Bucket List";
        textNodec.fontSize = 75;
        textNodec.x = 415;
        textNodec.y = 68;
        figma.currentPage.appendChild(textNodec);
        figma.currentPage.selection = [textNodec];
        figma.viewport.scrollAndZoomIntoView([textNodec]);

        // figma.closePlugin();
      }
      updateTextNode();
        }
    }
    
    }
    
};