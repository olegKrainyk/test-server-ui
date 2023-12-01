echo "Switching  to branch master"
# git checkout master

echo "Building app ..."
npm run build

echo "Deploying files to server ..."
scp -r build/* whyiamthere@10.241.104.202:/var/www/10.241.104.202/ 

echo "done."