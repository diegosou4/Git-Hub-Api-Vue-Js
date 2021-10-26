const vm = new Vue({
    el: "#app",
    data: {
        mensagem: "Dj lorran que ta tocando",
        id: "",
        info : [],
        repos : [],
        id:"",
        gitUser: false,
        repositoryIsok: false
    },
    methods:{
        callId(e){
            this.id = e.target.value;
            this.callGithub();
            this.callrepository();
            this.gitUser = true;
            this.repositoryIsok = true;
        
            
        },
        callGithub(){
            fetch(`https://api.github.com/users/${this.id}`)
            .then(r => r.json())
            .then(r => {
                this.info = r
            })
        },
        callrepository(){
            fetch(`https://api.github.com/users/${this.id}/repos`)
            .then(r => r.json())
            .then(r => {
                this.repos = r
            })
        },

    }
})