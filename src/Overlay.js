import styles from "./Overlay.module.css";

export function Overlay({ scroll }) {
  return (
    
    <div
      className={styles.scrollContainer}
      onScroll={(e) => {
        const scroll01 =
          e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        scroll.current = scroll01;
      }}
    >
      

      <section
        style={{ height: "105vh" }}
        className={styles.sectionLeft + " " + styles.sectionHero}
      >
        <header>
          <h1>
            George The Frogs Adventure 
          </h1>
          <h2>
            A scrollable interactive story
          </h2>
          <br />
          
          <h3>
          Instructions
          <br />
          <br />
          -To interact with the scene, move the mouse off of the left side of the screen. 
          <br />
          <br />
          -If an object is interactable it will hover, which means you can click it to reveal what it has to say.
          </h3>
        </header>
        
         
        </section>

       

        <section style={{ height: "60vh" }} className={styles.sectionLeft}>
        <p>
          <br />
          <br />
          To start the story, click on George the frog.
          <br />
          <br />
          After that, wait for the fish to surface to see what he has to say.
        </p>
       </section>

      <section style={{ height: "160vh" }} className={styles.sectionLeft}>
        <p>
          SPLASH!!
          <br />
          We are underwater now! Look at all the fish!
          <br />
          <br />
          I wonder where the pearl could be! You could click on a fish and ask them where they think the pearl could be.
        </p>
      </section>


      <section style={{ height: "100vh" }} className={styles.sectionLeft}>
        <p>
          As George emerged from the water with the pearl, he made sure to gift it to his little son David. 
        </p>
      </section>

      <section style={{ height: "80vh" }} className={styles.sectionLeft}>
        <p>
        Click on David to see what he has to say.
        </p>
        </section>


      <section style={{ height: "100vh" }} className={styles.sectionLeft}>
        <p>
         After a tiresome journey, George watched the moon rise over his newly found pearl. 
        </p>
        <p style={{ marginBottom: "300px" }}> The End ... </p>
      </section>
    </div>
  );
}