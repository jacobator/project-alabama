set :deploy_to, "/home/ubuntu/project-alabama"
server '52.40.235.247', port: 22, roles: %w{app db web}, user: 'ubuntu'

set :ssh_options, {
 keys: %w(~/project-alabama.pem),
 forward_agent: true
}
