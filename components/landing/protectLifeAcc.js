import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FeatureSlideMobile } from "../../styles/styled/featureSliderMobile.styled";

const AccordianMobile = () => {

  const swipe_acc = useRef()

  const { ref: end, inView } = useInView({
    // threshold: 0
  });

  useEffect(() => {

    let tab_headers = swipe_acc.current.querySelectorAll('.stick-acc__header')
    let tab_head_height = swipe_acc.current.querySelector('.stick-acc__header').offsetHeight;
    let tab_contents = swipe_acc.current.querySelectorAll('.stick-acc__content')

    let header_top = 0;
    let content_stick_top = tab_head_height;

    tab_headers.forEach((header, i) => {  // Built in method
      //sum += value;
      console.log(i + " from top " + `${header.getBoundingClientRect().top + window.pageYOffset}`);
      header.style.marginTop = `${header_top}px`;
      header.style.top = `${header_top}px`;
      header.style.bottom = `calc(${tab_head_height * tab_headers.length}px - (${header_top}px + ${tab_head_height}px))`;
      header_top = header_top + tab_head_height;

    })

    tab_contents.forEach((content) => {
      content.style.height = `calc(100vh - ${tab_head_height * tab_headers.length}px)`;
      content.style.top = `${content_stick_top}px`;
      content_stick_top = content_stick_top + tab_head_height;
    })

    let stack_view = document.querySelectorAll('.sc-view-top')

    stack_view.forEach((view) => {
      // console.log(tab_headers[i].innerHTML);
      tab_headers.forEach((elem, i) => {
        view.innerHTML += `
        <a href="#${i + 1}"> <div class="stick-acc__header_sc"> ${elem.innerHTML} </div> </a>
      `;
      })

    })

  }, []);



  return (
    <FeatureSlideMobile>
      <div className={`stick-acc ${inView ? "passed" : ""}`} ref={swipe_acc}>

        <div className="head_hook" id="1"></div>
        <Link href="#1">
          <div className="stick-acc__header">
            <span>Test header 1</span>
          </div>
        </Link>
        <div className="stick-acc__content">
          <div className="sc-view-top"> </div>
          <h2>Start</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam dolor, nisi tempora quis maxime id consequuntur quasi nemo autem eligendi suscipit sequi exercitationem magni repellendus? Optio ab aspernatur harum. Voluptatibus recusandae consequatur quo! Perspiciatis perferendis sit ut corporis quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam dolor, nisi tempora quis maxime id consequuntur quasi nemo autem eligendi suscipit sequi exercitationem magni repellendus? Optio ab aspernatur harum. Voluptatibus recusandae consequatur quo! Perspiciatis perferendis sit ut corporis quae.</p>
          <h2>End</h2>
        </div>
        <div className="head_hook" id="2"></div>
        <Link href="#2">
          <div className="stick-acc__header">
            <span>Test header 2</span>
          </div>
        </Link>
        <div className="stick-acc__content">
          <div className="sc-view-top"> </div>
          <h2>Start</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam dolor, nisi tempora quis maxime id consequuntur quasi nemo autem eligendi suscipit sequi exercitationem magni repellendus? Optio ab aspernatur harum. Voluptatibus recusandae consequatur quo! Perspiciatis perferendis sit ut corporis quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam dolor, nisi tempora quis maxime id consequuntur quasi nemo autem eligendi suscipit sequi exercitationem magni repellendus? Optio ab aspernatur harum. Voluptatibus recusandae consequatur quo! Perspiciatis perferendis sit ut corporis quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam dolor, nisi tempora quis maxime id consequuntur quasi nemo autem eligendi suscipit sequi exercitationem magni repellendus? Optio ab aspernatur harum. Voluptatibus recusandae consequatur quo! Perspiciatis perferendis sit ut corporis quae.</p>
          <h2>End</h2>
        </div>
        <div className="head_hook" id="3"></div>
        <Link href="#3">
          <div className="stick-acc__header">
            <span>Test header 3</span>
          </div>
        </Link>
        <div className="stick-acc__content" >
          <div className="sc-view-top"> </div>
          <h2>Start</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam dolor, nisi tempora quis maxime id consequuntur quasi nemo autem eligendi suscipit sequi exercitationem magni repellendus? Optio ab aspernatur harum. Voluptatibus recusandae consequatur quo! Perspiciatis perferendis sit ut corporis quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam dolor, nisi tempora quis maxime id consequuntur quasi nemo autem eligendi suscipit sequi exercitationem magni repellendus? Optio ab aspernatur harum. Voluptatibus recusandae consequatur quo! Perspiciatis perferendis sit ut corporis quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam dolor, nisi tempora quis maxime id consequuntur quasi nemo autem eligendi suscipit sequi exercitationem magni repellendus? Optio ab aspernatur harum. Voluptatibus recusandae consequatur quo! Perspiciatis perferendis sit ut corporis quae.</p>
          <h2>End</h2>
        </div>

      </div>
      <div ref={end}></div>
    </FeatureSlideMobile>
  );
}

export default AccordianMobile;