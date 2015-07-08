//=====================================================
// initialize the repo
//=====================================================

git init

//=====================================================
// return all branches in repo.
//=====================================================

git branch

//=====================================================
// check the repo status.
//=====================================================

git status

//=====================================================
// commit the changes.
// this is just a local operation.
//=====================================================

git commit -am "comments should be go here"

//=====================================================
// log for repo.
//=====================================================

git log --oneline
/**
	remote branch log 
*/
git log --oneline <alias>/<branch>

//=====================================================
// difference between branches.
//=====================================================

git diff <alias>/<branch>..<branch>
// example
git diff origin/master..master


//=====================================================
// it will return all remote connection in repo.
//=====================================================

git remote

//=====================================================
// it will add a remote connection with alias
// followed by url all remote connection in repo.
//=====================================================

git remote add <alias> <url> 

//=====================================================
// it will give more information remote connection.
//=====================================================

git remote -v

//=====================================================
// remove remote from repo.
//=====================================================

git remote rm <alias>


//=====================================================
// pushing code to remote repo.
//=====================================================

git push -u <alias> <branch>

//=====================================================
// check remote repo in local.
//=====================================================
ls -la .git/refs/remotes/origin<alias>


//=====================================================
// make a clone of repo in local system.
//=====================================================

git clone <url> <repo-name-is-optional>

//=====================================================
// push the changes to the server changes.
//=====================================================

git push