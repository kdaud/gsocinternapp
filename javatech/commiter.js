class Committer{
    constructor(username, community, project){
      this.username = username;
      this.community = community;
      this.project = project;
    }
    getCommiterInfo(){
        return `${this.username} volunteers with ${this.community}`;
    }
}

class CoreCommiter extends Committer{

}
 const kdaud = new CoreCommiter('kdaud','OpenMRS');
 console.log(kdaud.getCommiterInfo);
