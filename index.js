const WidgetBrain = {
    props: {
        message: {
            type: String
        }
    },
    data: function() {
        return {
        }
    },
    created() {
    },
    template: `<div>
            <p>My message: {{ message }}</p>
        </div>`,
};

const vm = new Vue({
    el: '#app',
    components: {
        'widget-brain': WidgetBrain,
    }
})