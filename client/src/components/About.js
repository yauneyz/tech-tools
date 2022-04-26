const About = () => (
  <div className="background">
    <div className="about-page">
      <div className="about-header">
        <div className="catalog-link">
          <a href="/">&#8592;Back To Catalog</a>
        </div>
        <div className="about-header-text">
          <h1>"What tools should I use to teach kids to code?"</h1>
        </div>
      </div>
      <p>This site attempts to answer that question. </p>
      <h3>What is this site?</h3>
      <p>
        It is a catalog of tools that have been created or used with the express
        purpose of helping children learn to program computational objects or to
        think computationally. Use the filters in the sidebar to search for
        tools by the coding language used, the age group that tool tends to
        target, the hardware platform the tool can be used with, as well as
        whether or not the tool is still available for your own use. You can
        also search by tool categories, which we explain in the table below. If
        there is a tool missing that you think should be included in the
        catalog, click the “Suggest a Tool” button and let us know about it!
      </p>
      <h3>What this site is NOT</h3>
      <p>
        This catalog is NOT a list of curricula or resources to teach coding
        (that might be a future project). Rather, the focus is on the unique
        coding tools themselves.
      </p>
      <h2>Coding Tools Classification</h2>
      <p>
        As we put together this list of tools, we noticed that there were
        specific categories and sub-categories of coding tools for kids. This
        observation led us to develop the following framework for talking about
        the different types of tools.
      </p>
      <table>
        <caption>Classification of Coding Tools for Kids</caption>
        <tr class="top">
          <th>Category</th>
          <th>Sub-category</th>
          <th>Definition</th>
          <th>Example</th>
        </tr>
        <tr>
          <td rowspan="3" class="bottom">
            Software
          </td>
          <td>Self-contained Programming Environment</td>
          <td>
            General programming environment wherein what is programmed can only
            be used in this environment.
          </td>
          <td>Scratch</td>
        </tr>
        <tr>
          <td>Software/Game Development Kit</td>
          <td>
            Tool that helps students to create games or apps that can be
            deployed beyond the development environment.
          </td>
          <td>Pocket Code</td>
        </tr>
        <tr>
          <td class="bottom">Learning Game</td>
          <td class="bottom">
            Game that teaches coding as the player advances. Coding is a core
            mechanic of interacting with and/or completing the game
            successfully.
          </td>
          <td class="bottom">CodeCombat</td>
        </tr>
        <tr>
          <td rowspan="3" class="bottom">
            Hardware
          </td>
          <td>Tangible Computing</td>
          <td>
            Physical objects that promote or assist in learning
            programming/technology not including robots.
          </td>
          <td>Osmo</td>
        </tr>
        <tr>
          <td>Robotics</td>
          <td>
            Physical robots that use programs as input. These may be programmed
            on-board or on a device and then the program is transferred to the
            robot.
          </td>
          <td>SPRK+</td>
        </tr>
        <tr>
          <td class="bottom">Microcontrollers, Microprocessors</td>
          <td class="bottom">
            Small devices that receive an input and give an output. Can control
            physical elements (motors, LEDs, etc.) connected with circuits.
          </td>
          <td class="bottom">Arduino</td>
        </tr>
        <tr>
          <td rowspan="4" class="bottom">
            Unplugged
          </td>
          <td>Game</td>
          <td>
            Board/Card game with a focus on teaching computational concepts.
          </td>
          <td>Code Monkey Island</td>
        </tr>
        <tr>
          <td>Book</td>
          <td>
            Book with the aim of teaching computational teaching or coding
            principles, usually through story.
          </td>
          <td>Hello Ruby</td>
        </tr>
        <tr>
          <td>Hands-on Manipulative</td>
          <td>
            Physical items invented or utilized with the purpose of enabling
            learners to understand computational concepts by manipulating their
            positioning and relationships to each other.
          </td>
          <td>Turing Tumble</td>
        </tr>
        <tr>
          <td class="bottom">Other</td>
          <td class="bottom">
            Crafts, illustrations or any other unique tools not listed that help
            young students learn coding concepts through coding to interact with
            them.
          </td>
          <td class="bottom">CT Illustrations</td>
        </tr>
      </table>

      <br />

      <p>
        We hope this tool is useful to you in your efforts to teach children to
        code!
      </p>
    </div>
  </div>
);

export default About;
