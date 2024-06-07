git clone https://github.com/rameshrjay/work.git
yum install git java docker 
wget  sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
  sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
yum install jenkins
java -version
wget https://dlcdn.apache.org/maven/maven-3/3.9.7/binaries/apache-maven-3.9.7-bin.tar.gz
ll
tar -xvzf apache-maven-3.9.7-bin.tar.gz
sudo mv apache-maven-3.9.7 /opt/apache-maven-3.9.7
export M2_HOME=/opt/apache-maven-3.9.7
export M2=$M2_HOME/bin
export PATH=$M2:$PATH
source ~/.bashrc
mvn -version
ll
git clone https://github.com/rameshrjay/work.git
ll
tar -xvzf apache-maven-3.9.7-bin.tar.gz
sudo mv apache-maven-3.9.7 /opt/apache-maven-3.9.7
export M2_HOME=/opt/apache-maven-3.9.7
export M2=$M2_HOME/bin
export PATH=$M2:$PATH
source ~/.bashrc
mvn -version
ll
docker --version
systemctl start jenkins
systemctl start docker
systemctl status docker
systemctl status jenkins
cat /var/lib/jenkins/secrets/initialAdminPassword
docker ps -a
dpcker images
docker pull sonarqube
docker image
docker images
docker run -itd --name Ramesh -p 9000:9000 sonarqube
docker stop Ramesh
docker rm Ramesh
docker images
docker run -itd --name Ramesh -p 9000:9000 sonarqube
ll
cd work
ll
cd ecommerce-multivendor-backend-master/
ll
cd src/
ll
cd ..
ll
Docker file
ll
cd ..
git remote -v
ll
git clone https://github.com/rameshrjay/workshop.git
ll
cd workshop/
ll
cd ecommerce-multivendor-backend-master/
ll
cd src/
ll
cd main/
ll
cd resources/
ll
vi application.properties 
cd ..
git remote -v
git add .
git init
git add .
git commit "m"
git commit -m "l"
git remote add origin https://github.com/rameshrjay/workshop.git
git push -u origin master
gir pull origin master --allow-unrelated-histories
git pull origin master --allow-unrelated-histories
git push -u origin master
git branch
ll
git status
git commit -m " first commit"
git add .
git commit -m "second"
git commit -a "second"
git pull origin master --allow-unrelated-histories
git fetch https://github.com/rameshrjay/workshop.git
git remove -v
git remote set-url origin https://github.com/rameshrjay/workshop.git
git remove -v
git remote -v
git pull origin master --allow-unrelated-histories
git push -u origin master
git branch
git push -u origin master
ll
cd workshop/
git push -u origin master
error: failed to push some refs to 'https://github.com/rameshrjay/workshop.git'
git pull origin master
git status
git add .
git commmit -m "j"
git push -u origin master
ll
cd ecommerce-multivendor-backend-master/
ll
cd src/
ll
cd main/
ll
cd resources/
ll
vi application.properties 
cd ..
systemctl restart jenkins
systemctl status jenkins
sudo usermod -aG docker jenkins
sudo systemctl restart jenkins
sudo systemctl status docker
sudo su - jenkins
docker ps
docker stop Ramesh
systemctl  stop docker
docker ps
exit
ll
mvn --version
maven --version
java -version
git --version
docker --version
jenkins --version
jenkins --version 
java -version
docjker --version
docker --version
systemctl start jenkins 
systemctl start docker
docker images
docker ps -a
docker stop Ramesh
docker ps -a
docker rm  Ramesh
docker ps -a
docker images
docker run -itd --name Ramesh -p 9000:9000 sonarqube
docker ps -a
aws configure
java -version
mvn --version
ll
tar -xvzf apache-maven-3.9.7-bin.tar.gz
sudo mv apache-maven-3.9.7 /usr/local/apache-maven
export M2_HOME=/usr/local/apache-maven
export PATH=$M2_HOME/bin:$PATH
source ~/.bashrc   # or ~/.zshrc, ~/.profile
mvn -version
sysstemctl start jenkins
systemctl start jenkins
systemctl start docker
systemctl status docker
systemctl status jenkins
docker ps
docker images
docker run -itd --name Ramesh -p 9000:9000 sonarqube
docker ps -a
docker rm Ramesh
docker run -itd --name Ramesh -p 9000:9000 sonarqube
mvn org.owasp:dependency-check-maven:check
systemctl status jenkins
systemctl status docker
ll
docker ps
docker stop Ramesh
systemctl stop docker
exit 
