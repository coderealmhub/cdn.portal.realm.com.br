// Change slider's arrows active status
    function updateSliderArrowsStatus(
      cardsContainer,
      containerWidth,
      cardCount,
      cardWidth
    ) {
      if (
        $(cardsContainer).scrollLeft() + containerWidth <
        cardCount * cardWidth + 100
      ) {
        $("#cards-slider-large #slide-right-container").addClass("active");
      } else {
        $("#cards-slider-large #slide-right-container").removeClass("active");
      }
      if ($(cardsContainer).scrollLeft() > 0) {
        $("#cards-slider-large #slide-left-container").addClass("active");
      } else {
        $("#cards-slider-large #slide-left-container").removeClass("active");
      }
    }
    $(function () {
      // Scroll slider left/right
      let div = $("#cards-slider-large #cards-container");
      let cardCount = $(div).find(".cards").children(".card").length;
      let speed = 450;
      let containerWidth = $("#cards-slider-large #cards-container").width();
      let cardWidth = $("#cards-slider-large .card").outerWidth( true );

      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

      //Remove scrollbars
      $("#cards-slider-large #slide-right-container").click(function (e) {
        cardWidth = $("#cards-slider-large .card").outerWidth( true );
        if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
          $(div).animate(
            {
              scrollLeft: $(div).scrollLeft() + cardWidth * 2
            },
            {
              duration: speed,
              complete: function () {
                setTimeout(
                  updateSliderArrowsStatus(
                    div,
                    containerWidth,
                    cardCount,
                    cardWidth
                  ),
                  1005
                );
              }
            }
          );
        }
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
      });

      $("#cards-slider-large #slide-left-container").click(function (e) {
        cardWidth = $("#cards-slider-large .card").outerWidth( true );
        if ($(div).scrollLeft() + containerWidth > containerWidth) {
          $(div).animate(
            {
              scrollLeft: "-=" + cardWidth * 2
            },
            {
              duration: speed,
              complete: function () {
                setTimeout(
                  updateSliderArrowsStatus(
                    div,
                    containerWidth,
                    cardCount,
                    cardWidth
                  ),
                  1005
                );
              }
            }
          );
        }
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
      });

      // Apply card width based on container width:
      $(document).ready(function() {
        var ContainerWidth = $("#cards-slider-large #cards-container").width();
        try {
          if (ContainerWidth > 0 && ContainerWidth < 590) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 1)) / 2);  //notice how we substract the ".card" margin.
          }
          else if (ContainerWidth > 590 && ContainerWidth < 790) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 2)) / 3);
          }
          else if (ContainerWidth > 790 && ContainerWidth < 990) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 3)) / 4);
          }
          else if (ContainerWidth > 990 && ContainerWidth < 1190) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 4)) / 5);
          }
          else if (ContainerWidth > 1190 && ContainerWidth < 1390) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 5)) / 6);
          }
          else if (ContainerWidth > 1390 && ContainerWidth < 1590) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 6)) / 7);
          }
          else if (ContainerWidth > 1590 && ContainerWidth < 1790) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 7)) / 8);
          }
          else if (ContainerWidth > 1790 && ContainerWidth < 1990) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 8)) / 9);
          }
          else if (ContainerWidth > 1990 && ContainerWidth < 2190) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 9)) / 10);
          }
          else if (ContainerWidth > 2190 && ContainerWidth < 2390) {
            $("#cards-slider-large .card").width((ContainerWidth - (10 * 10)) / 11);
          }
          else if (ContainerWidth > 2070 && ContainerWidth < 9999) {
            $("#cards-slider-large .card").width(230);  //just give a basic 230px card width for all other possible sizes.
          }
        } catch (error) {
          console.log(
            `Error occured while trying to apply cards width based on container width: 
                ${error}`
          );
        }
      });

    });