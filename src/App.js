import './App.css';

import WebAIM from "./images/WebAIM-screenshot.png"
import VFlea from "./images/VFlea-screenshot.png"
import StyleGuide from "./images/StyleGuide.png"
import Results from "./images/Results-screenshot.png"
import LoFiComputer from "./images/LoFi-Computer.PNG"
import LoFiIPad from "./images/LoFi-IPad.PNG"
import LoFiIPhone from "./images/LoFi-IPhone.PNG"
import HiFiDesktop from "./images/HiFi-Desktop.png"
import HiFiIPad from "./images/HiFi-IPad.png"
import HiFiIPhone from "./images/HiFi-IPhone.png"

function App() {
  return (
    <div className="App">
      <h1>Responsivity and Accessibility</h1>
      <p>Accessibility is paramount in creating equitable, ethical websites for user consumption. For the internet, where any individual
        may find and interact with your work, ensuring that the experience is consistent and pleasant across all users is incredibly valuable.
        This can be achieved through ensuring color blind accessible palletes, high contrast, readable font styles and sizes, alt tags for
        image readers, and many other tools to ensure varying bodily needs are accounted for in the website design. Another form of accesibility,
        and a tenet of good website design in general, is responsivity to different viewing devices. The user experience overall is heightened,
        and a consistent impression of your work guaranteed, only if users can experience the intended design on a phone, tablet, computer, or
        whatever else. For this to work, websites much be designed with this principle in mind, and coded to allow for structred rearragnement
        of content to suit the view frame.
      </p>

      <section>
      <h2>An Example of Room to Improve</h2>
      <p> This is of course not intended to criticise the design of the website in question, nor to imply that my final product would be better.
        However as an excercise in accessible and responsive design, I sought out a website which I felt had room to grow in these areas. This
        is the website <a href="http://www.vflea.com/">VFlea.com</a>. Vflea is a virtual flea market website similar in concept to Ebay, where
        users can haggle for items, trade items with other users, and sell their items online.
      </p>
      <img src={VFlea} alt="screenshot of Vflea" />
      <h3>Accessibility</h3>
      <p>The website WebAIM WAVE runs an algorithmic check to evaluate the accesibility of any particular website. While an algorithm cannot catch
        every possible accesibility concern, this website is a simple, reputable source for a quick overview of a site's accessibilty, and we can
        see it catches some issues already:
      </p>
      <img src={WebAIM} alt="screenshot of WebAIM" />
      <ul>
        <li><b>Errors:</b> Missing alternative text means that screenreaders will have issues describing the website to visually impaired users, and
        is a big barrier to accessibility. 122 of the issues are missing alt text, with the remaining 2 being missing form labels, which are
        similarly an issue of lack of information for screen readers, but also remove a more accessible extended action box associated with
        form controls.</li>
        <li><b>Alerts:</b> Once again we have "suspicious" alternative text, meaning the text may be incomplete or redundant in a way that makes
        it useless or confusing to screen readers -- an issue that persists to the button naming conventions of the site. There is also no first
        level heading (h1), meaning screen readers do not know what to read as the title of the page. Suspicious link text identifies that most
        of the alternate text for links is titled "More Details" which is ambiguous and provides screen reader users without clear understanding of
        where this link will take them, which is not only confusing but also presents a security risk. Some of the link text is just missing.</li>
      </ul>
      <p>In addition to WebAIM WAVE's identifications, the site has other design issues:</p>
      <ul>
        <li><b>The conceptual model is scattered and unclear.</b> Elements are placed around the page semi-randomly, without any sense
        of linearity, flow, or readability in their arrangement. Lots of elements compete for your attention when you first land on the page,
        with no clear hierarchy of importance denoted by color, size, or position.</li>
        <li><b>No learnability due to lots of element duplication.</b> There are multiple duplicate call to action buttons in seemingly unrelated areas of the website.
        The "join" button is everywhere, seemingly because it is important, but struggles to compete with all of the other buttons. There are
        multiple different buttons to search the categories and multiple search bars. This makes it incredibly difficult to figure out which
        button to press first, and discourages clicking anything in case it is the wrong one.</li>
        <li><b>No memorability due to unclear wording.</b> Buttons that seem to imply the same action are worded and styled differently, as in "Vflea Categories" and
        "Site Categories". There are multiple references to a "site", which a user would expect to associate with a "website", but upon
        inspection appears to refer to an individual user's store page. There is a disclaimer about it, but if it needs to be disclaimed it is
        unclear, and it's hard to notice the disclaimer with everything else competing for attention. This issue persists to things like the "Vflea
        links" button, which I expected to be links to social media or partner sites, but actually serves as a hamburger menu for the topbar.
        It also includes the Home and About buttons already on the topbar, but adds other sections not accessible from the topbar, like Support.
        This is incredibly confusing, and means that even upon revisiting the website, it is hard to remember what a button actually did.</li>
      </ul>
      <p><b>A point in its favor:</b> It is actually very responsive, and resizes seamlessly to accomodate other screen sizes. This is a big plus for accessibility.</p>
      </section>

      <section>
      <h2>What To Do?</h2>
      <p>In an excercise to put the tenets of accessibility and reponsivity into practice, I will be redesigning the website to the best of my ability, with these
        two core prinicples in mind.
      </p>
      <h3>Step One: Low Fidelity Prototype</h3>
      <p>Using the Balsamiq software, I assembled wireframes displaying the rough sketch of what these websites would look like. The main goal is to
        restructure the site so that it has a clear flow and visual hierarchy, is readable and learnable, and has contrast and clarity. There are also
        multiple wireframes to account for multiple different devices, and the layout is designed with responsivity in mind. It should maintain the overall
        impression of the site across devices, and resize seamlessly. The annotations alongside the wireframes serve to identify the core differences made
        from the reference site and the reasoning behind them.
      </p>
      <img src={LoFiComputer} alt="Balsamiq Low Fidelity Wireframes - Desktop"/>
      <img src={LoFiIPad} alt="Balsamiq Low Fidelity Wireframes - IPad"/>
      <img src={LoFiIPhone} alt="Balsamiq Low Fidelity Wireframes - IPhone"/>

      <h3>Step Two: A Style Guide</h3>
      <p> Once the basic structure of the website is in place, it is time to think about colors, fonts, elements, and the rest of the suite of
        aethetic tools at our disposal to reinforce the hierarchy, create contrast, and make an appealing looking page. Using Figma, I put together
        a style guide highlighting the interactive states of the site and maintaining contrast, while also trying to keep true to the original
        color palette of the website.
      </p>
      <img src={StyleGuide} alt="Figma Style Guide"/>

      <h3>Step Three: High Fidelity Prototype</h3>
      <p> With the structure and the style of the website known, I can put them together to create a detailed mockup of what the website will
        look like. This should be a faithful rendering meant to serve as a reference for building out the actual site, and should follow the
        style of the style guide and the structure of the wireframes. It is annotated for use for website developers (in this case, me) to
        understand the construction of this website to be able to achieve this product.
      </p>
      <img src={HiFiDesktop} alt="Figma High Fidelity Prototypes - Desktop"/>
      <img src={HiFiIPad} alt="Balsamiq Low Fidelity Wireframes - IPad"/>
      <img src={HiFiIPhone} alt="Balsamiq Low Fidelity Wireframes - IPhone"/>
      </section>

      <section>
      <h2>The Final Product</h2>
      <p>With a detailed high fidelity prototype it is simply a matter of putting in some work to build the website for real. I believe that
        this faithfully recreates the aesthetic of the original website and preserves its more unique features like moneyless trading of items
        between users and searching for user store pages by location, while also drastically improving the hierarchy and consolidating the 
        elements into a clearer and more carefully guided user experience.
        <br/>
        <a href="https://happykitty444.github.io/ResponsiveRedesign/">Visit the Final Product Here!</a>
      </p>
      <img src={Results} alt="Screenshot of Final Website"/>
      </section>
    </div>
  );
}

export default App;
