class CreateGreeting < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.text :title

      t.timestamps
    end
  end
end
