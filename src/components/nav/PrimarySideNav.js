import React from 'react';
import {saveData, loadFileAsText, loadFile, profile} from '../../utils/Common'
import $ from 'jquery';

class PrimarySideNav extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    }

    render() {
        return(
            <div className=" __bu-sidebar __bu-primary-side-b-shadow bg-white text-center">
                <a href="#" target="_blank" className={"pt-1 animate slideIn"}>
                    <svg height="20pt" viewBox="-24 0 496 496.00015" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m280 248c0-44.183594 35.816406-80 80-80v-80h-80v-80h-272v480h352v-160c-44.183594 0-80-35.816406-80-80zm-144 184h-80v-80h80zm0-128h-80v-80h80zm0-128h-80v-80h80zm0 0" fill="#bddbff"/><path d="m360 88-80-80v80zm0 0" fill="#004fac"/><path d="m56 96h80v80h-80zm0 0" fill="#004fac"/><path d="m56 224h80v80h-80zm0 0" fill="#ffda44"/><path d="m56 352h80v80h-80zm0 0" fill="#004fac"/><path d="m360 168c-44.183594 0-80 35.816406-80 80s35.816406 80 80 80 80-35.816406 80-80-35.816406-80-80-80zm48 96h-32v32h-32v-32h-32v-32h32v-32h32v32h32zm0 0" fill="#004fac"/><path d="m376 232v-32h-32v32h-32v32h32v32h32v-32h32v-32zm0 0" fill="#d80027"/><g fill="#231f20"><path d="m136 88h-80c-4.417969 0-8 3.582031-8 8v80c0 4.417969 3.582031 8 8 8h80c4.417969 0 8-3.582031 8-8v-80c0-4.417969-3.582031-8-8-8zm-8 80h-64v-64h64zm0 0"/><path d="m136 216h-80c-4.417969 0-8 3.582031-8 8v80c0 4.417969 3.582031 8 8 8h80c4.417969 0 8-3.582031 8-8v-80c0-4.417969-3.582031-8-8-8zm-8 80h-64v-64h64zm0 0"/><path d="m136 344h-80c-4.417969 0-8 3.582031-8 8v80c0 4.417969 3.582031 8 8 8h80c4.417969 0 8-3.582031 8-8v-80c0-4.417969-3.582031-8-8-8zm-8 80h-64v-64h64zm0 0"/><path d="m368 160.398438v-72.398438c.003906-.648438-.078125-1.292969-.238281-1.917969-.074219-.199219-.160157-.390625-.257813-.578125-.140625-.410156-.316406-.804687-.527344-1.183594-.082031-.128906-.089843-.28125-.175781-.398437-.269531-.601563-.652343-1.140625-1.121093-1.601563l-80-80c-.457032-.46875-1-.847656-1.601563-1.121093-.117187-.085938-.277344-.101563-.40625-.183594-.375-.203125-.765625-.378906-1.167969-.519531-.1875-.097656-.382812-.183594-.582031-.257813-.628906-.160156-1.273437-.24218725-1.921875-.238281h-272c-4.417969 0-8 3.582031-8 8v480c0 4.417969 3.582031 8 8 8h352c4.417969 0 8-3.582031 8-8v-152.398438c45.148438-4.320312 79.621094-42.246093 79.621094-87.601562s-34.472656-83.28125-79.621094-87.601562zm-80-133.085938 52.6875 52.6875h-52.6875zm64 452.6875h-336v-464h256v72c0 4.417969 3.582031 8 8 8h72v64.398438c-45.148438 4.320312-79.617188 42.246093-79.617188 87.601562s34.46875 83.28125 79.617188 87.601562zm8-160c-39.765625 0-72-32.234375-72-72s32.234375-72 72-72 72 32.234375 72 72c-.0625 39.738281-32.261719 71.9375-72 72zm0 0"/><path d="m408 224h-24v-24c0-4.417969-3.582031-8-8-8h-32c-4.417969 0-8 3.582031-8 8v24h-24c-4.417969 0-8 3.582031-8 8v32c0 4.417969 3.582031 8 8 8h24v24c0 4.417969 3.582031 8 8 8h32c4.417969 0 8-3.582031 8-8v-24h24c4.417969 0 8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8zm-8 32h-32v32h-16v-32h-32v-16h32v-32h16v32h32zm0 0"/></g></svg>
                </a>
                <a href="#" className={"pt-2 animate slideIn"} onClick={loadFile}>
                    <input hidden={true} onChange={loadFileAsText} type="file" id="fileToLoad"/>
                    <svg height="20pt" viewBox="0 -24 415.32639 415" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m274.929688 105.832031h-152.988282c-22.09375 0-40 17.910157-40 40v207.742188c-12.238281 7.074219-26.894531 8.644531-40.351562 4.320312l.351562-1.070312v-242.992188c0-22.089843 17.90625-40 40-40h160.988282c17.671874 0 32 14.328125 32 32zm0 0" fill="#6fe3ff"/><path d="m81.941406 353.574219c11.867188-6.875 20.382813-18.332031 23.546875-31.679688l43.601563-153.953125c4.277344-18.035156 20.382812-30.773437 38.921875-30.777344h180.316406c11.96875 0 23.304687 5.359376 30.902344 14.601563 7.597656 9.246094 10.65625 21.40625 8.339843 33.148437l-34.199218 143.128907c-3.703125 18.742187-20.136719 32.25-39.242188 32.25h-277.207031c8.785156.003906 17.417969-2.3125 25.019531-6.71875zm0 0" fill="#e48e66"/><path d="m334.929688 88.523438v48.640624h-20c.003906-17.300781-14.019532-31.328124-31.320313-31.332031h-8.679687c0-17.671875-14.328126-32-32-32h-160.988282c-22.09375 0-40 17.910157-40 40v242.992188l-.351562 1.070312c-20.613282-6.664062-34.585938-25.855469-34.589844-47.519531v-260.75c0-23.453125 19.011719-42.460938 42.460938-42.460938h99c9.652343 0 18.980468 3.492188 26.257812 9.828126l22.109375 19.242187c7.28125 6.339844 16.609375 9.832031 26.261719 9.828125h69.390625c23.445312.003906 42.449219 19.015625 42.449219 42.460938zm0 0" fill="#f8ec7d"/><path d="m314.929688 137.164062h-126.917969c-18.539063.003907-34.644531 12.742188-38.921875 30.777344l-43.601563 153.953125c-3.164062 13.347657-11.679687 24.804688-23.546875 31.679688v-207.742188c0-22.089843 17.90625-40 40-40h161.667969c17.300781.003907 31.324219 14.03125 31.320313 31.332031zm0 0" fill="#6fe3ff"/><path d="m368.328125 130.164062h-26.398437v-41.640624c-.027344-27.300782-22.148438-49.425782-49.449219-49.460938h-69.390625c-7.964844 0-15.660156-2.878906-21.664063-8.109375l-22.109375-19.238281c-8.554687-7.449219-19.511718-11.550782-30.855468-11.550782h-99c-27.304688.03125-49.429688 22.15625-49.460938 49.460938v260.75c-.0273438 30.28125 23.683594 55.277344 53.929688 56.839844v.078125h280.199218c22.378906-.039063 41.640625-15.820313 46.082032-37.753907l34.167968-143 .058594-.269531c2.722656-13.792969-.875-28.082031-9.800781-38.945312-8.925781-10.859375-22.246094-17.15625-36.308594-17.15625zm-354.328125 180.210938v-260.75c.023438-19.578125 15.886719-35.441406 35.460938-35.460938h99c7.964843 0 15.65625 2.878907 21.664062 8.109376l22.109375 19.238281c8.550781 7.449219 19.511719 11.550781 30.855469 11.550781h69.390625c19.570312.027344 35.425781 15.890625 35.449219 35.460938v41.640624h-6.652344c-3.386719-18.144531-19.210938-31.304687-37.667969-31.332031h-2.320313c-3.402343-18.515625-19.53125-31.972656-38.359374-32h-160.988282c-25.945312.03125-46.972656 21.054688-47 47v233.402344c-3.046875-1.816406-5.859375-4.003906-8.371094-6.507813-8.070312-8.035156-12.597656-18.964843-12.570312-30.351562zm269.609375-197.542969c10.734375.015625 20.191406 7.054688 23.289063 17.332031h-118.886719c-21.746094-.058593-40.667969 14.855469-45.695313 36.011719l-43.5625 153.808594-.074218.292969c-1.65625 6.921875-5.003907 13.324218-9.738282 18.632812v-193.078125c.019532-18.214843 14.78125-32.976562 33-33zm-234.667969 239.714844v-238.714844c.019532-18.214843 14.78125-32.976562 33-33h160.988282c11.105468.015625 20.878906 7.34375 24 18h-144.988282c-25.945312.03125-46.972656 21.054688-47 47v203.472657c-8.117187 3.769531-17.207031 4.90625-26 3.242187zm351.785156-169.117187-34.164062 142.988281-.058594.269531c-3.082031 15.445312-16.625 26.578125-32.375 26.605469h-239.84375c8.914063-7.78125 15.199219-18.132813 17.984375-29.632813l43.558594-153.808594.078125-.292968c3.488281-14.90625 16.796875-25.4375 32.109375-25.398438h180.3125c9.851563 0 19.1875 4.398438 25.457031 11.996094 6.265625 7.597656 8.816406 17.597656 6.945313 27.269531zm0 0" fill="#63316d"/></svg>
                </a>
                <a className="active pt-2 animate slideIn" href="#" onClick={saveData}>
                    <svg height="20pt" viewBox="-58 1 511 511.99994" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m79.089844 234.628906v-16.828125c0-13.300781 10.78125-24.085937 24.085937-24.085937h204.808594v-157.652344c0-14.371094-11.648437-26.019531-26.019531-26.019531h-180.488282c-1.824218 0-3.636718.144531-5.417968.414062v52.773438c0 17.714843-14.363282 32.078125-32.078125 32.078125h-51.472657c-1.316406 3.84375-2.007812 7.902344-2.007812 12.03125v325.851562c0 14.371094 11.648438 26.019532 26.019531 26.019532h42.570313zm0 0" fill="#b1d9ff"/><path d="m96.058594 63.230469v-52.78125c-.472656.070312-.941406.152343-1.410156.238281-.097657.019531-.195313.039062-.292969.054688-.445313.089843-.890625.183593-1.332031.289062-.109376.023438-.214844.050781-.320313.078125-.449219.105469-.894531.21875-1.335937.34375-.050782.015625-.097657.03125-.148438.046875-1.386719.398438-2.746094.878906-4.074219 1.433594-.144531.0625-.292969.121094-.4375.183594-.34375.148437-.683593.304687-1.019531.464843-.199219.09375-.398438.1875-.597656.285157-.3125.15625-.625.3125-.933594.472656-.222656.121094-.445312.242187-.664062.363281-.289063.160156-.574219.316406-.855469.484375-.261719.152344-.523438.316406-.785157.480469-.324218.199219-.644531.402343-.960937.617187-.382813.25-.757813.507813-1.132813.777344-.195312.140625-.386718.289062-.578124.4375-.292969.214844-.582032.4375-.867188.664062-.195312.15625-.386719.3125-.578125.472657-.28125.234375-.558594.472656-.832031.714843-.179688.15625-.355469.316407-.53125.476563-.296875.273437-.589844.550781-.878906.835937-.140626.140626-.289063.277344-.433594.421876-.417969.425781-.828125.855468-1.230469 1.304687-.003906.003906-.011719.011719-.015625.019531l-20.195312 22.5625-33.65625 37.601563c-.019532.023437-.035157.042969-.054688.066406-.378906.425781-.75.863281-1.109375 1.304687-.113281.140626-.222656.289063-.335937.429688-.257813.332031-.519532.664062-.769532 1.003906-.113281.15625-.21875.3125-.332031.46875-.238281.339844-.476563.679688-.703125 1.023438-.101562.152344-.195312.304687-.292969.460937-.234375.359375-.460937.722657-.679687 1.09375-.082032.140625-.160156.28125-.242188.417969-.226562.394531-.445312.792969-.65625 1.195312-.0625.121094-.125.238282-.1875.359376-.222656.4375-.4375.875-.644531 1.320312-.042969.089844-.085937.183594-.128906.277344-.21875.484375-.429688.972656-.628907 1.46875-.019531.054687-.042968.109375-.066406.167968-.21875.550782-.425781 1.109376-.617187 1.671876 0 0-.003907.003906-.003907.003906h51.472657c17.714843 0 32.078125-14.359375 32.078125-32.078125zm0 0" fill="#f8f8f8"/><path d="m373.796875 236.300781-21.109375-30.085937c-5.496094-7.835938-14.46875-12.5-24.035156-12.5h-12.375v83.617187c0 10.445313-8.46875 18.914063-18.917969 18.914063h-133.367187c-10.449219 0-18.917969-8.46875-18.917969-18.914063v-83.617187h-41.898438c-13.300781 0-24.085937 10.785156-24.085937 24.085937v260.113281c0 13.300782 10.785156 24.085938 24.085937 24.085938h15.59375v-151.996094c0-7.527344 6.101563-13.628906 13.632813-13.628906h200.113281c7.53125 0 13.632813 6.101562 13.632813 13.628906v151.996094h15.59375c13.300781 0 24.085937-10.785156 24.085937-24.085938v-203.519531c0-13.632812-4.203125-26.933593-12.03125-38.09375zm0 0" fill="#ffcb78"/><path d="m145.074219 277.332031c0 10.445313 8.46875 18.914063 18.914062 18.914063h133.371094c10.445313 0 18.914063-8.46875 18.914063-18.914063v-83.617187h-171.199219zm101.652343-39.003906c0-9.140625 7.410157-16.554687 16.550782-16.554687h1.671875c9.140625 0 16.550781 7.414062 16.550781 16.554687v13.433594c0 9.601562-7.78125 17.386719-17.386719 17.386719-9.601562 0-17.386719-7.785157-17.386719-17.386719zm0 0" fill="#f8f8f8"/><path d="m264.113281 269.148438c9.601563 0 17.386719-7.785157 17.386719-17.386719v-13.433594c0-9.140625-7.410156-16.554687-16.554688-16.554687h-1.667968c-9.140625 0-16.554688 7.414062-16.554688 16.554687v13.433594c.003906 9.601562 7.785156 17.386719 17.390625 17.386719zm0 0" fill="#ff9d6a"/><path d="m332.515625 336.375h-200.117187c-7.527344 0-13.628907 6.101562-13.628907 13.628906v151.996094h227.378907v-151.996094c0-7.527344-6.105469-13.628906-13.632813-13.628906zm0 0" fill="#f8f8f8"/><path d="m381.980469 230.558594-21.109375-30.089844c-14.992188-21.371094-38.433594-15.96875-42.886719-16.753906v-147.652344c0-19.859375-16.160156-36.0195312-36.019531-36.0195312-193.351563.1875002-181.558594-.5624998-188.917969.7773432-10.492187 1.90625-19.871094 7.316407-26.683594 14.917969-59.230469 66.175781-56.347656 62.441407-59.648437 68.230469-4.074219 7.128906-6.214844 15.1875-6.214844 23.371094v325.851562c0 19.863282 16.160156 36.019532 36.019531 36.019532h32.570313v8.703124c0 18.796876 15.292968 34.085938 34.085937 34.085938h258.566407c18.792968 0 34.082031-15.289062 34.082031-34.085938v-203.519531c.003906-15.769531-4.785157-30.929687-13.84375-43.835937zm-226.910157-26.84375h151.207032v73.617187c0 4.917969-4 8.917969-8.917969 8.917969h-133.367187c-4.917969 0-8.917969-4-8.917969-8.917969v-73.617187zm-69.007812-178.851563v38.367188c0 12.175781-9.90625 22.082031-22.082031 22.082031h-33.046875c48.082031-53.699219 50.019531-56.929688 55.128906-60.449219zm42.707031 467.136719v-141.996094c0-2.003906 1.628907-3.632812 3.628907-3.632812h200.117187c2.003906 0 3.632813 1.628906 3.632813 3.632812v141.996094zm247.058594-14.085938c0 7.769532-6.320313 14.085938-14.085937 14.085938h-5.59375v-141.996094c0-13.027344-10.601563-23.628906-23.632813-23.628906h-200.117187c-13.027344 0-23.628907 10.601562-23.628907 23.628906v141.996094h-5.59375c-7.769531 0-14.085937-6.316406-14.085937-14.085938 0-32.246093 0-124.675781 0-163.292968 0-5.523438-4.476563-10-10-10-5.523438 0-10 4.476562-10 10v134.59375h-32.570313c-8.835937 0-16.023437-7.1875-16.023437-16.023438.035156-340.554687-.074219-325.769531.082031-327.882812h43.402344c23.203125 0 42.078125-18.875 42.078125-42.078125v-43.1875h175.90625c8.832031 0 16.019531 7.1875 16.019531 16.019531v147.652344c-5.464844 0-189.707031 0-194.808594 0-18.792969 0-34.085937 15.292968-34.085937 34.085937v16.828125c0 5.519532 4.476562 9.996094 10 9.996094 5.523437 0 10-4.476562 10-9.996094v-16.828125c0-7.765625 6.316406-14.085937 14.085937-14.085937h31.898438v73.617187c0 15.941407 12.972656 28.914063 28.914062 28.914063h133.371094c15.941406 0 28.914063-12.972656 28.914063-28.914063v-73.617187c.714843.148437 11.429687-1.445313 18.226562 8.242187l21.109375 30.085938c6.683594 9.527343 10.21875 20.714843 10.21875 32.351562zm0 0"/><path d="m264.113281 279.148438c15.101563 0 27.386719-12.289063 27.386719-27.390626v-13.429687c0-14.644531-11.914062-26.554687-26.554688-26.554687h-1.667968c-14.640625 0-26.550782 11.910156-26.550782 26.554687v13.429687c0 15.101563 12.285157 27.390626 27.386719 27.390626zm-7.390625-40.820313c0-8.785156 14.777344-8.792969 14.777344 0v13.433594c0 4.070312-3.3125 7.386719-7.386719 7.386719s-7.390625-3.3125-7.390625-7.386719zm0 0"/><path d="m294.207031 362.429688h-123.5c-5.519531 0-9.996093 4.480468-9.996093 10 0 5.523437 4.476562 10 9.996093 10h123.5c5.523438 0 10-4.476563 10-10 0-5.519532-4.476562-10-10-10zm0 0"/><path d="m294.207031 409.1875h-123.5c-5.519531 0-9.996093 4.480469-9.996093 10 0 5.523438 4.476562 10 9.996093 10h123.5c5.523438 0 10-4.476562 10-10 0-5.519531-4.476562-10-10-10zm0 0"/><path d="m294.207031 455.945312h-123.5c-5.519531 0-9.996093 4.476563-9.996093 10 0 5.519532 4.476562 9.996094 9.996093 9.996094h123.5c5.523438 0 10-4.476562 10-9.996094 0-5.523437-4.476562-10-10-10zm0 0"/><path d="m79.089844 264.636719c-5.523438 0-10 4.492187-10 10.011719 0 5.523437 4.476562 10 10 10 5.519531 0 9.996094-4.476563 9.996094-10v-.023438c0-5.523438-4.476563-9.988281-9.996094-9.988281zm0 0"/></svg>
                </a>
                <a href="#" className={"pt-2 animate slideIn"} onClick={() => window.print()}>
                    <svg height="20pt" viewBox="0 -36 480 480" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m464 168h-448c-4.417969 0-8-3.582031-8-8v-112c0-4.417969 3.582031-8 8-8h280l24-32h104v32h40c4.417969 0 8 3.582031 8 8v112c0 4.417969-3.582031 8-8 8zm0 0" fill="#d9d9d9"/><path d="m56 104h368v64h-368zm0 0" fill="#428dc5"/><path d="m104 136h272c8.835938 0 16 7.164062 16 16s-7.164062 16-16 16h-272c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16zm0 0" fill="#787d82"/><path d="m112 136h256v232c0 13.253906-10.746094 24-24 24h-232zm0 0" fill="#fbd699"/><path d="m424 40h40c4.417969 0 8 3.582031 8 8v112c0 4.417969-3.582031 8-8 8h-40zm0 0" fill="#cdcdcd"/><path d="m104 104h272c8.835938 0 16 7.164062 16 16s-7.164062 16-16 16h-272c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16zm0 0" fill="#a8a8a8"/><path d="m56 168h-40c-4.417969 0-8-3.582031-8-8v-112c0-4.417969 3.582031-8 8-8h40zm0 0" fill="#cdcdcd"/><path d="m56 40v64h368v-96h-104l-24 32zm0 0" fill="#d9d9d9"/><path d="m296 40h128v64h-128zm0 0" fill="#c0f5f9"/><path d="m16 168h32v232h-32zm0 0" fill="#a88e74"/><path d="m432 168h32v232h-32zm0 0" fill="#a88e74"/><path d="m16 168h32v24h-32zm0 0" fill="#8d7761"/><path d="m432 168h32v24h-32zm0 0" fill="#8d7761"/><path d="m392 208h16v16h-16zm0 0" fill="#c0f5f9"/><path d="m392 240h16v48h-16zm0 0" fill="#c0f5f9"/><path d="m312 216-68 88 76 88h24c13.253906 0 24-10.746094 24-24v-88zm0 0" fill="#85bc94"/><path d="m160 224h-17.128906c-3.613282-14.101562-16.3125-23.972656-30.871094-24v56h48c8.835938 0 16-7.164062 16-16s-7.164062-16-16-16zm0 0" fill="#c0f5f9"/><path d="m320 64h80v16h-80zm0 0" fill="#b8eaee"/><path d="m336 392h8l-86.671875-105.246094-49.328125 63.839844zm0 0" fill="#6b9777"/><path d="m142.59375 352 73.40625-96 80 97.144531zm0 0" fill="#8dc79d"/><path d="m340 392c-15.464844 0-28-12.535156-28-28v-20h-232c0 26.511719 5.488281 48 32 48zm0 0" fill="#fbedbf"/><path d="m96 64h16v16h-16zm0 0" fill="#99d8aa"/><path d="m128 64h16v16h-16zm0 0" fill="#f55648"/><path d="m160 64h16v16h-16zm0 0" fill="#428dc5"/><path d="m112 136h256v16h-256zm0 0" fill="#eecb91"/><path d="m192 176c-.007812 22.925781 16.199219 42.65625 38.6875 47.101562 22.488281 4.449219 44.984375-7.628906 53.703125-28.828124 8.722656-21.203126 1.230469-45.613282-17.878906-58.273438h-53.023438c-13.421875 8.882812-21.492187 23.90625-21.488281 40zm0 0" fill="#fd7422"/><path d="m198.496094 152h83.007812c-3.703125-6.414062-8.832031-11.886719-14.992187-16h-53.023438c-6.160156 4.113281-11.289062 9.585938-14.992187 16zm0 0" fill="#ec6c20"/><path d="m464 32h-32v-24c0-4.417969-3.582031-8-8-8h-104c-2.519531 0-4.890625 1.1875-6.398438 3.199219l-21.601562 28.800781h-276c-8.835938 0-16 7.164062-16 16v112c.015625 5.691406 3.066406 10.941406 8 13.777344v226.222656c0 4.417969 3.582031 8 8 8h32c4.417969 0 8-3.582031 8-8v-224h48v160h-24c-4.417969 0-8 3.582031-8 8 0 13.847656 0 56 40 56h232c17.671875 0 32-14.328125 32-32v-192h48v224c0 4.417969 3.582031 8 8 8h32c4.417969 0 8-3.582031 8-8v-226.222656c4.933594-2.835938 7.984375-8.085938 8-13.777344v-112c0-8.835938-7.164062-16-16-16zm0 16v112h-32v-112zm-184 128c0 18.808594-13.105469 35.078125-31.484375 39.082031-18.378906 4.003907-37.066406-5.335937-44.890625-22.445312-7.824219-17.105469-2.671875-37.351563 12.375-48.636719h48c10.082031 7.546875 16.015625 19.40625 16 32zm-13.488281-48h-162.511719c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h272c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm-146.511719 81.390625c7.480469 2.699219 13.140625 8.917969 15.128906 16.617187.914063 3.527344 4.09375 5.988282 7.734375 5.992188h17.136719c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8h-40zm-56-161.390625h224v48h-224zm352 48h-112v-48h112zm-22.238281 40c6.015625-6.445312 7.875-15.738281 4.796875-24h17.441406v48h-17.457031c3.0625-8.265625 1.203125-17.546875-4.800781-24zm-69.761719-120h92v16h-104zm-308 32h32v112h-32zm24 344h-16v-216h16zm24-280h17.472656c-3.082031 8.261719-1.222656 17.558594 4.800782 24-4.039063 4.347656-6.277344 10.066406-6.273438 16 .027344 2.730469.523438 5.4375 1.472656 8h-17.472656zm32 40c-.003906-2.160156.882812-4.222656 2.457031-5.703125 1.457031-1.488281 3.460938-2.316406 5.542969-2.296875v16c-4.417969 0-8-3.582031-8-8zm24 112h40c13.253906 0 24-10.746094 24-24s-10.746094-24-24-24h-11.457031c-5.199219-11.875-15.84375-20.484375-28.542969-23.089844v-48.910156h74.0625c-16.234375 23.285156-12.480469 55.03125 8.738281 73.886719 21.214844 18.855469 53.183594 18.855469 74.398438 0 21.21875-18.855469 24.972656-50.601563 8.738281-73.886719h74.0625v114.703125l-41.976562-48c-1.609376-1.75-3.886719-2.734375-6.261719-2.703125-2.394531.074219-4.628907 1.214844-6.089844 3.113281l-56.273437 72.886719-27.199219-33.0625c-1.5-1.953125-3.863281-3.042969-6.320313-2.914062-2.4375.050781-4.71875 1.207031-6.199218 3.144531l-64.878907 84.832031h-24.800781zm151.527344 72h-106.625l51.328125-67.136719zm-95.527344 48h-64c-13.167969 0-22.3125-5.679688-23.792969-32h215.792969v12c-.007812 7.125 2.109375 14.085938 6.078125 20zm168 0h-4c-11.046875 0-20-8.953125-20-20v-20c0-4.417969-3.582031-8-8-8h-19.753906l-32.414063-39.359375 52.550781-68.054687 47.617188 54.421874v84.992188c0 8.835938-7.164062 16-16 16zm32-240c4.417969 0 8 3.582031 8 8 .003906 2.160156-.882812 4.222656-2.457031 5.703125-1.457031 1.488281-3.460938 2.316406-5.542969 2.296875zm80 248h-16v-216h16zm0 0"/><path d="m96 64h16v16h-16zm0 0"/><path d="m128 64h16v16h-16zm0 0"/><path d="m160 64h16v16h-16zm0 0"/><path d="m392 208h16v16h-16zm0 0"/><path d="m392 240h16v48h-16zm0 0"/><path d="m320 64h80v16h-80zm0 0"/></svg>
                </a>
                <a href="#"  id="sidebarCollapse" className={"pt-2"}>
                    <img src={require('../../assets/img/boy.png')} className={"m-2 __bu-sidebar-img-user fixed-bottom"}/>
                </a>
            </div>
        )
    }
}

export {PrimarySideNav};