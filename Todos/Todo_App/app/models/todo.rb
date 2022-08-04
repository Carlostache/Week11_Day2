class Todo < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :body, presence: true
    validates :done, presence: true, inclusion: { in: [true, false] }
end
