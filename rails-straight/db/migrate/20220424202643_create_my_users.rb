class CreateMyUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :my_users do |t|
      t.string :email
      t.string :githubUsername
      t.string :githubToken

      t.timestamps
    end
  end
end
