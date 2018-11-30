import React from 'react';

import './css/UploadCard.css';

class UploadCard extends React.Component {
    render() {
        return (
            <div className="card upload">
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod quam tortor, non scelerisque dui ullamcorper sit amet. Pellentesque mauris elit, ultrices ac scelerisque at, congue a nibh. Aliquam viverra dolor lorem, vel viverra nisl malesuada sit amet. Vivamus non velit ultrices, pharetra massa vitae, imperdiet magna. Maecenas metus sapien, rhoncus in elementum ut, pretium ut arcu. Maecenas sagittis ipsum elit, dictum mollis justo cursus nec. Nam imperdiet hendrerit libero, sit amet mattis mi congue tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean pretium convallis arcu vitae maximus.
                        Vivamus placerat purus non odio ornare, eu egestas dolor eleifend. Aliquam varius facilisis mauris quis imperdiet. Cras odio urna, lacinia eu justo vel, commodo vehicula purus. Curabitur eget urna sit amet sem imperdiet mollis. Vestibulum pretium neque quis sapien tincidunt vehicula. Nam posuere, metus ac viverra commodo, arcu lectus pretium velit, et facilisis nisi turpis eu felis. Nullam maximus est ut tincidunt feugiat. In convallis id purus nec eleifend. Suspendisse suscipit, eros ut varius convallis, elit purus dapibus libero, sit amet pretium odio elit non ipsum. Donec eu volutpat sem. Praesent tincidunt fermentum tellus at pellentesque. Nam molestie, massa vitae tincidunt sagittis, justo est euismod justo, quis fermentum lectus justo a nunc. Pellentesque enim massa, lacinia vitae nisi a, sagittis malesuada lorem. Morbi tincidunt finibus accumsan. Praesent accumsan, risus id cursus dignissim, massa ipsum cursus metus, sollicitudin sollicitudin metus mauris sit amet odio. Ut laoreet ut purus ac pulvinar.
                        Suspendisse eu tellus quis nunc rutrum finibus. Sed a ipsum ultricies, vehicula arcu sed, consequat ipsum. Maecenas ac ligula gravida metus aliquet porttitor quis eu nunc. Aliquam venenatis porta elit. Praesent volutpat, turpis sit amet finibus ultricies, nisi velit pulvinar felis, ut elementum eros lectus at turpis. In hac habitasse platea dictumst. In massa mi, rutrum ut dignissim vel, gravida id mauris.
                        Maecenas posuere massa at libero auctor, eu ultricies mi tristique. Phasellus id est auctor, interdum lorem a, commodo ante. Sed imperdiet tortor et lobortis bibendum. Vivamus pulvinar viverra facilisis. Curabitur vitae turpis sit amet lacus sollicitudin rutrum vitae ultricies est. Suspendisse ac convallis lacus. Curabitur sed placerat dui.
                        In vel massa vel risus pretium fringilla sit amet in metus. Mauris vel iaculis ipsum. Duis mattis magna quis dignissim pulvinar. Nullam tristique ullamcorper tortor, nec placerat tortor hendrerit sit amet. Proin mollis nec ante a laoreet. Duis lobortis enim tortor, vitae convallis massa ullamcorper sagittis. Etiam egestas euismod volutpat. Quisque vestibulum dapibus purus, vel volutpat ipsum porttitor vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eget leo nec est eleifend dignissim et id lacus. 
                    </p>
                    <button className="btn btn-primary" type="button" onClick={ this.props.onUploaded }>Click me!</button>
                </div>
            </div>
        );
    }
}

export default UploadCard;