import React from "react";

const SingleMovie = (props) => {
  console.log("singleMovie props", props);

  const [toggleState, setToggleState] = React.useState(null);

  const handleClick = (index) => {
    setToggleState({ active: index });
    if (toggleState?.active === index) {
      setToggleState({ active: null });
    }
  };

  const loaded = () => {
    var edgeSize = 200;
    window.addEventListener("mousemove", handleMousemove);

    function handleMousemove(event) {
      var viewportX = event.clientX;
      console.log("viewportX -", viewportX);

      var viewportWidth = document.documentElement.clientWidth;
      console.log("viewportWidth -", viewportWidth);

      var edgeLeft = edgeSize;
      console.log("edgeLeft -", edgeLeft);
      var edgeRight = viewportWidth - edgeSize;
      console.log("edgeRight -", edgeRight);

      var isInLeftEdge = viewportX < edgeLeft;
      console.log("isInLeftEdge -", isInLeftEdge);
      var isInRightEdge = viewportX > edgeRight;
      console.log("isInRightEdge -", isInRightEdge);

      var elmnt = document.documentElement;
      if (isInLeftEdge) {
        console.log(elmnt);
        elmnt.scrollLeft -= 25;
      }
      if (isInRightEdge) {
        console.log(elmnt);
        elmnt.scrollLeft += 25;
      }
    }

    // var edgeSize = 200;
    // var timer = null;

    // window.addEventListener("mousemove", handleMousemove, false);

    // function handleMousemove(event) {
    //   // NOTE: Much of the information here, with regard to document dimensions,
    //   // viewport dimensions, and window scrolling is derived from JavaScript.info.
    //   // I am consuming it here primarily as NOTE TO SELF.
    //   // --
    //   // Read More: https://javascript.info/size-and-scroll-window
    //   // --
    //   // CAUTION: The viewport and document dimensions can all be CACHED and then
    //   // recalculated on window-resize events (for the most part). I am keeping it
    //   // all here in the mousemove event handler to remove as many of the moving
    //   // parts as possible and keep the demo as simple as possible.

    //   // Get the viewport-relative coordinates of the mousemove event.
    //   var viewportX = event.clientX;
    //   console.log("viewportX -", viewportX);

    //   // Get the viewport dimensions.
    //   var viewportWidth = document.documentElement.clientWidth;
    //   console.log("viewportWidth -", viewportWidth);

    //   // Next, we need to determine if the mouse is within the "edge" of the
    //   // viewport, which may require scrolling the window. To do this, we need to
    //   // calculate the boundaries of the edge in the viewport (these coordinates
    //   // are relative to the viewport grid system).
    //   var edgeLeft = edgeSize;
    //   console.log("edgeLeft -", edgeLeft);
    //   var edgeRight = viewportWidth - edgeSize;
    //   console.log("edgeRight -", edgeRight);

    //   var isInLeftEdge = viewportX < edgeLeft;
    //   console.log("isInLeftEdge -", isInLeftEdge);
    //   var isInRightEdge = viewportX > edgeRight;
    //   console.log("isInRightEdge -", isInRightEdge);

    //   // If the mouse is not in the viewport edge, there's no need to calculate
    //   // anything else.
    //   if (!(isInLeftEdge || isInRightEdge)) {
    //     clearTimeout(timer);
    //     return;
    //   }

    //   // If we made it this far, the user's mouse is located within the edge of the
    //   // viewport. As such, we need to check to see if scrolling needs to be done.

    //   // Get the document dimensions.
    //   // --
    //   // NOTE: The various property reads here are for cross-browser compatibility
    //   // as outlined in the JavaScript.info site (link provided above).
    //   var documentWidth = Math.max(
    //     document.body.scrollWidth,
    //     document.body.offsetWidth,
    //     document.body.clientWidth,
    //     document.documentElement.scrollWidth,
    //     document.documentElement.offsetWidth,
    //     document.documentElement.clientWidth
    //   );

    //   // Calculate the maximum scroll offset in each direction. Since you can only
    //   // scroll the overflow portion of the document, the maximum represents the
    //   // length of the document that is NOT in the viewport.
    //   var maxScrollX = documentWidth - viewportWidth;

    //   // As we examine the mousemove event, we want to adjust the window scroll in
    //   // immediate response to the event; but, we also want to continue adjusting
    //   // the window scroll if the user rests their mouse in the edge boundary. To
    //   // do this, we'll invoke the adjustment logic immediately. Then, we'll setup
    //   // a timer that continues to invoke the adjustment logic while the window can
    //   // still be scrolled in a particular direction.
    //   // --
    //   // NOTE: There are probably better ways to handle the ongoing animation
    //   // check. But, the point of this demo is really about the math logic, not so
    //   // much about the interval logic.
    //   (function checkForWindowScroll() {
    //     clearTimeout(timer);

    //     if (adjustWindowScroll()) {
    //       timer = setTimeout(checkForWindowScroll, 15);
    //     }
    //   })();

    //   // Adjust the window scroll based on the user's mouse position. Returns True
    //   // or False depending on whether or not the window scroll was changed.
    //   function adjustWindowScroll() {
    //     // Get the current scroll position of the document.
    //     var currentScrollX = window.pageXOffset;

    //     // Determine if the window can be scrolled in any particular direction.
    //     var canScrollLeft = currentScrollX > 0;
    //     var canScrollRight = currentScrollX < maxScrollX;

    //     // Since we can potentially scroll in two directions at the same time,
    //     // let's keep track of the next scroll, starting with the current scroll.
    //     // Each of these values can then be adjusted independently in the logic
    //     // below.
    //     var nextScrollX = currentScrollX;

    //     // As we examine the mouse position within the edge, we want to make the
    //     // incremental scroll changes more "intense" the closer that the user
    //     // gets the viewport edge. As such, we'll calculate the percentage that
    //     // the user has made it "through the edge" when calculating the delta.
    //     // Then, that use that percentage to back-off from the "max" step value.
    //     var maxStep = 50;

    //     // Should we scroll left?
    //     if (isInLeftEdge && canScrollLeft) {
    //       var intensity = (edgeLeft - viewportX) / edgeSize;

    //       nextScrollX = nextScrollX - maxStep * intensity;

    //       // Should we scroll right?
    //     } else if (isInRightEdge && canScrollRight) {
    //       var intensity = (viewportX - edgeRight) / edgeSize;

    //       nextScrollX = nextScrollX + maxStep * intensity;
    //     }

    //     // Sanitize invalid maximums. An invalid scroll offset won't break the
    //     // subsequent .scrollTo() call; however, it will make it harder to
    //     // determine if the .scrollTo() method should have been called in the
    //     // first place.
    //     nextScrollX = Math.max(0, Math.min(maxScrollX, nextScrollX));

    //     if (nextScrollX !== currentScrollX) {
    //       window.scrollTo(nextScrollX, 0);
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // }

    const singleMovieMap = props.moviesListState.map((element, index) => {
      console.log("map", element);
      return (
        <div
          className={`single-movie${
            toggleState?.active === index ? " active" : ""
          }`}
          onClick={() => handleClick(index)}
          key={index}
        >
          <div className="movie-backdrop">
            <img
              src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`}
              alt={element.original_title}
            />
          </div>
          <div className="movie-title">{element.original_title}</div>
        </div>
      );
    });
    return <div className="movies-list">{singleMovieMap}</div>;
  };

  const loading = () => {
    return <></>;
  };

  return props.moviesListState ? loaded() : loading();
};

export default SingleMovie;
