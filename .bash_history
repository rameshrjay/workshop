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
