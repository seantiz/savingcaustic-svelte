<div id="keyboard">
    <div class="octave">
        <div class="whites">
            <div class="t_key" id="key_30"><span>C3</span></div>
            <div class="t_key" id="key_32"></div>
            <div class="t_key" id="key_34"></div>
            <div class="t_key" id="key_35"></div>
            <div class="t_key" id="key_37"></div>
            <div class="t_key" id="key_39"></div>
            <div class="t_key" id="key_3B"></div>
        </div>
        <div class="blacks">
            <div class="t_key" id="key_31"></div>
            <div class="t_key" id="key_33"></div>
            <div class="t_key" id="key_36"></div>
            <div class="t_key" id="key_38"></div>
            <div class="t_key" id="key_3A"></div>
        </div>
    </div>
    <div class="octave">
        <div class="whites">
            <div class="t_key" id="key_3C"><span>C4</span></div>
            <div class="t_key" id="key_3E"></div>
            <div class="t_key" id="key_40"></div>
            <div class="t_key" id="key_41"></div>
            <div class="t_key" id="key_43"></div>
            <div class="t_key" id="key_45"></div>
            <div class="t_key" id="key_47"></div>
        </div>
        <div class="blacks">
            <div class="t_key" id="key_3D"></div>
            <div class="t_key" id="key_3F"></div>
            <div class="t_key" id="key_42"></div>
            <div class="t_key" id="key_44"></div>
            <div class="t_key" id="key_46"></div>
        </div>
    </div>
    <div class="octave">
        <div class="whites">
            <div class="t_key" id="key_48"><span>C5</span></div>
            <div class="t_key" id="key_4A"></div>
            <div class="t_key" id="key_4C"></div>
            <div class="t_key" id="key_4D"></div>
            <div class="t_key" id="key_4F"></div>
            <div class="t_key" id="key_51"></div>
            <div class="t_key" id="key_53"></div>
        </div>
        <div class="blacks">
            <div class="t_key" id="key_49"></div>
            <div class="t_key" id="key_4B"></div>
            <div class="t_key" id="key_4E"></div>
            <div class="t_key" id="key_50"></div>
            <div class="t_key" id="key_52"></div>
        </div>
    </div>
</div>

<style>
    #keyboard {
        display: flex;
        user-select: none;
    }

    .octave {
        width: 25rem;
        position: relative;
    }

    .whites {
        display: flex;
    }

    .whites div {
        width: 14.3%;
        border: 1px solid #000;
        border-radius: 0px 0px 3px 3px;
        cursor: pointer;
        height: 10rem;
        background: white;
        transition: background-color 0.2s ease-in-out;
    }

    :global(.whites div.pressed) {
        background-color: #ff9900;
        transition: background-color 0s ease-in-out;
    }

    .whites span {
        position: absolute;
        padding: 3px;
        font-size: 0.8rem;
        color: #666;
        bottom: 0px;
    }

    .blacks {
        position: absolute;
        top: 0px;
        width: 100%;
    }

    .blacks div {
        position: absolute;
        width: 8%;
        border: 1px solid #000;
        border-radius: 0px 0px 4px 4px;
        background-color: #000;
        height: 6rem;
    }

    :global(.blacks div.pressed) {
        background-color: #994400;
    }

    .blacks div:nth-child(1) {
        left: 8.75%;
    }

    .blacks div:nth-child(2) {
        left: 25.25%;
    }

    .blacks div:nth-child(3) {
        left: 51%;
    }

    .blacks div:nth-child(4) {
        left: 67%;
    }

    .blacks div:nth-child(5) {
        left: 83%;
    }
</style>
